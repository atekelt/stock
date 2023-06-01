require "application_system_test_case"

class PaymentsTest < ApplicationSystemTestCase
  setup do
    @payment = payments(:one)
  end

  test "visiting the index" do
    visit payments_url
    assert_selector "h1", text: "Payments"
  end

  test "should create payment" do
    visit payments_url
    click_on "New payment"

    fill_in "Academic semester", with: @payment.academic_semester_id
    fill_in "Grade", with: @payment.grade_id
    fill_in "Price", with: @payment.price
    fill_in "School", with: @payment.school_id
    fill_in "Student", with: @payment.student_id
    click_on "Create Payment"

    assert_text "Payment was successfully created"
    click_on "Back"
  end

  test "should update Payment" do
    visit payment_url(@payment)
    click_on "Edit this payment", match: :first

    fill_in "Academic semester", with: @payment.academic_semester_id
    fill_in "Grade", with: @payment.grade_id
    fill_in "Price", with: @payment.price
    fill_in "School", with: @payment.school_id
    fill_in "Student", with: @payment.student_id
    click_on "Update Payment"

    assert_text "Payment was successfully updated"
    click_on "Back"
  end

  test "should destroy Payment" do
    visit payment_url(@payment)
    click_on "Destroy this payment", match: :first

    assert_text "Payment was successfully destroyed"
  end
end
