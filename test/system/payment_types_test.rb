require "application_system_test_case"

class PaymentTypesTest < ApplicationSystemTestCase
  setup do
    @payment_type = payment_types(:one)
  end

  test "visiting the index" do
    visit payment_types_url
    assert_selector "h1", text: "Payment types"
  end

  test "should create payment type" do
    visit payment_types_url
    click_on "New payment type"

    fill_in "Amount", with: @payment_type.amount_id
    fill_in "Description", with: @payment_type.description
    fill_in "Name", with: @payment_type.name
    fill_in "School level", with: @payment_type.school_level_id
    click_on "Create Payment type"

    assert_text "Payment type was successfully created"
    click_on "Back"
  end

  test "should update Payment type" do
    visit payment_type_url(@payment_type)
    click_on "Edit this payment type", match: :first

    fill_in "Amount", with: @payment_type.amount_id
    fill_in "Description", with: @payment_type.description
    fill_in "Name", with: @payment_type.name
    fill_in "School level", with: @payment_type.school_level_id
    click_on "Update Payment type"

    assert_text "Payment type was successfully updated"
    click_on "Back"
  end

  test "should destroy Payment type" do
    visit payment_type_url(@payment_type)
    click_on "Destroy this payment type", match: :first

    assert_text "Payment type was successfully destroyed"
  end
end
