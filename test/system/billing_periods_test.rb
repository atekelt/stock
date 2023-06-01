require "application_system_test_case"

class BillingPeriodsTest < ApplicationSystemTestCase
  setup do
    @billing_period = billing_periods(:one)
  end

  test "visiting the index" do
    visit billing_periods_url
    assert_selector "h1", text: "Billing periods"
  end

  test "should create billing period" do
    visit billing_periods_url
    click_on "New billing period"

    fill_in "Duration", with: @billing_period.duration
    fill_in "Miscellaneous fee", with: @billing_period.miscellaneous_fee
    fill_in "Miscellaneous fee reason", with: @billing_period.miscellaneous_fee_reason
    fill_in "Payment type", with: @billing_period.payment_type_id
    fill_in "Start date", with: @billing_period.start_date
    click_on "Create Billing period"

    assert_text "Billing period was successfully created"
    click_on "Back"
  end

  test "should update Billing period" do
    visit billing_period_url(@billing_period)
    click_on "Edit this billing period", match: :first

    fill_in "Duration", with: @billing_period.duration
    fill_in "Miscellaneous fee", with: @billing_period.miscellaneous_fee
    fill_in "Miscellaneous fee reason", with: @billing_period.miscellaneous_fee_reason
    fill_in "Payment type", with: @billing_period.payment_type_id
    fill_in "Start date", with: @billing_period.start_date
    click_on "Update Billing period"

    assert_text "Billing period was successfully updated"
    click_on "Back"
  end

  test "should destroy Billing period" do
    visit billing_period_url(@billing_period)
    click_on "Destroy this billing period", match: :first

    assert_text "Billing period was successfully destroyed"
  end
end
