require "application_system_test_case"

class StudentCustodiansTest < ApplicationSystemTestCase
  setup do
    @student_custodian = student_custodians(:one)
  end

  test "visiting the index" do
    visit student_custodians_url
    assert_selector "h1", text: "Student custodians"
  end

  test "should create student custodian" do
    visit student_custodians_url
    click_on "New student custodian"

    fill_in "Family info", with: @student_custodian.family_info_id
    fill_in "Student", with: @student_custodian.student_id
    click_on "Create Student custodian"

    assert_text "Student custodian was successfully created"
    click_on "Back"
  end

  test "should update Student custodian" do
    visit student_custodian_url(@student_custodian)
    click_on "Edit this student custodian", match: :first

    fill_in "Family info", with: @student_custodian.family_info_id
    fill_in "Student", with: @student_custodian.student_id
    click_on "Update Student custodian"

    assert_text "Student custodian was successfully updated"
    click_on "Back"
  end

  test "should destroy Student custodian" do
    visit student_custodian_url(@student_custodian)
    click_on "Destroy this student custodian", match: :first

    assert_text "Student custodian was successfully destroyed"
  end
end
