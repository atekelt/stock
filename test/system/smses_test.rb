require "application_system_test_case"

class SmsesTest < ApplicationSystemTestCase
  setup do
    @smse = smses(:one)
  end

  test "visiting the index" do
    visit smses_url
    assert_selector "h1", text: "Smses"
  end

  test "should create smse" do
    visit smses_url
    click_on "New smse"

    fill_in "Bill", with: @smse.bill_id
    fill_in "Message type", with: @smse.message_type
    check "Status" if @smse.status
    click_on "Create Smse"

    assert_text "Smse was successfully created"
    click_on "Back"
  end

  test "should update Smse" do
    visit smse_url(@smse)
    click_on "Edit this smse", match: :first

    fill_in "Bill", with: @smse.bill_id
    fill_in "Message type", with: @smse.message_type
    check "Status" if @smse.status
    click_on "Update Smse"

    assert_text "Smse was successfully updated"
    click_on "Back"
  end

  test "should destroy Smse" do
    visit smse_url(@smse)
    click_on "Destroy this smse", match: :first

    assert_text "Smse was successfully destroyed"
  end
end
