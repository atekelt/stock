require "test_helper"

class SmsNotificationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sms_notification = sms_notifications(:one)
  end

  test "should get index" do
    get sms_notifications_url
    assert_response :success
  end

  test "should get new" do
    get new_sms_notification_url
    assert_response :success
  end

  test "should create sms_notification" do
    assert_difference("SmsNotification.count") do
      post sms_notifications_url, params: { sms_notification: { bill_id: @sms_notification.bill_id, message_type: @sms_notification.message_type, status: @sms_notification.status } }
    end

    assert_redirected_to sms_notification_url(SmsNotification.last)
  end

  test "should show sms_notification" do
    get sms_notification_url(@sms_notification)
    assert_response :success
  end

  test "should get edit" do
    get edit_sms_notification_url(@sms_notification)
    assert_response :success
  end

  test "should update sms_notification" do
    patch sms_notification_url(@sms_notification), params: { sms_notification: { bill_id: @sms_notification.bill_id, message_type: @sms_notification.message_type, status: @sms_notification.status } }
    assert_redirected_to sms_notification_url(@sms_notification)
  end

  test "should destroy sms_notification" do
    assert_difference("SmsNotification.count", -1) do
      delete sms_notification_url(@sms_notification)
    end

    assert_redirected_to sms_notifications_url
  end
end
