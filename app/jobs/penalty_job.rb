require 'webirr/bill'
require 'webirr/client'

class PenaltyJob
  include Sidekiq::Job
  sidekiq_options queue: 'default', retry: 0

  def perform
    Merchant.all.each do |merchant|
      bills = Bill.by_merchant(merchant).with_no_payment.due_for_penalty_today

      bills.each do |bill|
        if bill.billing_period.penalities.blank?
          next
        else
          penality =
            bill
              .billing_period
              .penalities
              .order(:from_day)
              .where(
                'penalities.from_day <= :today and (penalities.to_day >= :today or penalities.to_day = 0)',
                today: (Date.today - bill.billing_period.start_date).to_i,
              )
              .try(:first)
          # create audit log and dont penalize twice
          if !penality.blank? &&
               PenalityLog.where(bill: bill, penality: penality).blank?
            updated_amount = bill.current_price + penality.amount
            penality_log = bill.penality_log
            if penality_log.blank?
              penality_log =
                PenalityLog.create(
                  bill: bill,
                  penality: penality,
                  amount: penality.try(:amount),
                )
            else
              penality_log.penality = penality
              penality_log.amount = penality.try(:amount)
              penality_log.save
            end

            webirr_client = Webirr::Client.new(bill.merchant.api_key, false)

            webirr_bill = Webirr::Bill.new
            webirr_bill.customer_code = bill.customer_code
            webirr_bill.customer_name = bill.customer_name
            webirr_bill.customer_phone = bill.phone_number
            webirr_bill.amount = updated_amount.to_s
            webirr_bill.time = bill.time
            webirr_bill.description = bill.description
            webirr_bill.bill_reference = bill.bill_reference
            webirr_bill.merchant_id = bill.merchant.webirr_merchant_id

            begin
              res = webirr_client.update_bill(webirr_bill)
              if (res['res'] == 'Ok' && res['error'].blank?)
                bill.bank_amount = updated_amount
                bill.save
                MessagingJob.perform_async(bill.id, true)
              else
                # should not rails standard error. it should skip current execution
                # raise StandardError
                next
              end
            rescue Faraday::ConnectionFailed => e
              ap "Connection failed: #{e}"
              penalty_log.delete
            end
          else
            next
          end
        end
      end
    end
  end
end
