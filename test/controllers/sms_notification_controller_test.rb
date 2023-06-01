require "test_helper"

class SmsNotificationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sms_notification_index_url
    assert_response :success
  end

  test "should get notify_all" do
    get sms_notification_notify_all_url
    assert_response :success
  end
end
