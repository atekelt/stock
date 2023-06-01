class SMSNotificationJob
  include Sidekiq::Job
  sidekiq_options queue: 'default', retry: 0

  def perform(args)
    SmsSender.new(
      phone_number: args['phone'],
      message: args['message']
    ).send
  end
end
