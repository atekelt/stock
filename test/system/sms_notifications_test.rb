require "application_system_test_case"

class SmsNotificationsTest < ApplicationSystemTestCase
  setup do
    @sms_notification = sms_notifications(:one)
  end

  test "visiting the index" do
    visit sms_notifications_url
    assert_selector "h1", text: "Sms notifications"
  end

  test "should create sms notification" do
    visit sms_notifications_url
    click_on "New sms notification"

    fill_in "Bill", with: @sms_notification.bill_id
    fill_in "Message type", with: @sms_notification.message_type
    check "Status" if @sms_notification.status
    click_on "Create Sms notification"

    assert_text "Sms notification was successfully created"
    click_on "Back"
  end

  test "should update Sms notification" do
    visit sms_notification_url(@sms_notification)
    click_on "Edit this sms notification", match: :first

    fill_in "Bill", with: @sms_notification.bill_id
    fill_in "Message type", with: @sms_notification.message_type
    check "Status" if @sms_notification.status
    click_on "Update Sms notification"

    assert_text "Sms notification was successfully updated"
    click_on "Back"
  end

  test "should destroy Sms notification" do
    visit sms_notification_url(@sms_notification)
    click_on "Destroy this sms notification", match: :first

    assert_text "Sms notification was successfully destroyed"
  end
end
