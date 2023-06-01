require "application_system_test_case"

class ApplicantsTest < ApplicationSystemTestCase
  setup do
    @applicant = applicants(:one)
  end

  test "visiting the index" do
    visit applicants_url
    assert_selector "h1", text: "Applicants"
  end

  test "should create applicant" do
    visit applicants_url
    click_on "New applicant"

    fill_in "Age", with: @applicant.age
    fill_in "Date of birth", with: @applicant.date_of_birth
    fill_in "Emergency contact full name", with: @applicant.emergency_contact_full_name
    fill_in "Emergency contact relation", with: @applicant.emergency_contact_relation
    fill_in "Emergency contact telephone", with: @applicant.emergency_contact_telephone
    fill_in "First name", with: @applicant.first_name
    fill_in "Grade", with: @applicant.grade
    fill_in "Last name", with: @applicant.last_name
    fill_in "Medical issues", with: @applicant.medical_issues
    fill_in "Middle name", with: @applicant.middle_name
    fill_in "Nationality", with: @applicant.nationality
    fill_in "Number of years", with: @applicant.number_of_years
    fill_in "Previous school name", with: @applicant.previous_school_name
    fill_in "Sex", with: @applicant.sex
    click_on "Create Applicant"

    assert_text "Applicant was successfully created"
    click_on "Back"
  end

  test "should update Applicant" do
    visit applicant_url(@applicant)
    click_on "Edit this applicant", match: :first

    fill_in "Age", with: @applicant.age
    fill_in "Date of birth", with: @applicant.date_of_birth
    fill_in "Emergency contact full name", with: @applicant.emergency_contact_full_name
    fill_in "Emergency contact relation", with: @applicant.emergency_contact_relation
    fill_in "Emergency contact telephone", with: @applicant.emergency_contact_telephone
    fill_in "First name", with: @applicant.first_name
    fill_in "Grade", with: @applicant.grade
    fill_in "Last name", with: @applicant.last_name
    fill_in "Medical issues", with: @applicant.medical_issues
    fill_in "Middle name", with: @applicant.middle_name
    fill_in "Nationality", with: @applicant.nationality
    fill_in "Number of years", with: @applicant.number_of_years
    fill_in "Previous school name", with: @applicant.previous_school_name
    fill_in "Sex", with: @applicant.sex
    click_on "Update Applicant"

    assert_text "Applicant was successfully updated"
    click_on "Back"
  end

  test "should destroy Applicant" do
    visit applicant_url(@applicant)
    click_on "Destroy this applicant", match: :first

    assert_text "Applicant was successfully destroyed"
  end
end
