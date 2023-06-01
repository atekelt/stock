require 'webirr/bill'
require 'webirr/client'

class InvoiceJob
  include Sidekiq::Job
  sidekiq_options queue: 'default', retry: 0

  def perform(m, b)
    billing_period = BillingPeriod.find(b)
    current_merchant = Merchant.find(m)

    students = billing_period.active_students

    webirr_client = Webirr::Client.new(current_merchant.api_key, false)
    #
    PaperTrail.request(enabled: false) do
      students.each do |student|
        customer_code = student.id_number
        customer_name = student.full_name
        phone_no = student.phone_number
        bill = Bill.new
        bill.student_id = student.id
        bill.merchant = current_merchant
        bill.billing_period_id = billing_period.id

        if bill.save!

          webirr_bill = Webirr::Bill.new
          webirr_bill.customer_code = customer_code
          webirr_bill.customer_name = customer_name
          webirr_bill.customer_phone = phone_no
          webirr_bill.amount = bill.current_price.to_s
          webirr_bill.time = bill.created_at
          webirr_bill.description = bill.description
          webirr_bill.bill_reference = bill.bill_reference
          webirr_bill.merchant_id = current_merchant.code

          begin
            resp = webirr_client.create_bill(webirr_bill)
            if resp['error'].blank? && !resp['res'].blank?
              bill.wbc_code = resp['res']
              bill.bank_amount = bill.current_price
              bill.save
              if (!bill.phone_number.blank? && !bill.wbc_code.blank?)
                MessagingJob.perform_async(bill.id)
              end
            elsif !resp['error'].blank? && resp['res'].blank?
              bill.delete
            end
          rescue Faraday::ConnectionFailed => e
            bill.delete
          end
        end
      end
    end
  end
end
