class PaymentConfirmationJob
  include Sidekiq::Job
  sidekiq_options queue: 'default', retry: 0

  def perform(payment_id)
    payment = Payment.find(payment_id)
    bill = payment.bill
    if !bill.blank? && !bill.phone_number.blank?
      message_sent =
        SmsSender.new(
          phone_number: bill.phone_number,
          message:
            "You paid #{payment.amount} Birr for #{bill.full_name}, #{bill.description}\n #{payment.bank_id.titleize} Ref: #{payment.payment_reference}\nReceipt: https://pay.webirr.com/r/#{payment.to_param}\n\n#{bill.merchant}",
        ).send
      # create message status log if SmsSender returns true
      SmsNotification.create(status: 'success', message_type: Message::MESSAGE_TYPES[:confirmation], bill: bill) if message_sent
    end
  end
end
