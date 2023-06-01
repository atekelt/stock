class MessagingJob
  include Sidekiq::Job
  sidekiq_options queue: 'default', retry: 0

  def perform(bill_id, with_penality = false)
    bill = Bill.find(bill_id)
    if !bill.blank? && !bill.phone_number.blank? && bill.sms_limit_not_reached?
      message_sent =
        SmsSender.new(
          phone_number: bill.phone_number,
          message:
            "Your invoice with amount of #{bill.bank_amount}#{with_penality ? ' with penality' : ''} for #{bill.full_name} #{bill.description} is ready for payment. Due date: #{bill.due_date}\n\nPayment code: #{bill.wbc_code.parameterize(separator: '-')}\n\n#{bill.merchant}",
        ).send
      # create message status log if SmsSender returns true
      SmsNotification.create(status: 'success', message_type: SmsNotification::MESSAGE_TYPES[:invoice], bill: bill) if message_sent
    end
  end
end
