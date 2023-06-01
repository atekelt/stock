require "application_system_test_case"

class ApplicantCustodiansTest < ApplicationSystemTestCase
  setup do
    @applicant_custodian = applicant_custodians(:one)
  end

  test "visiting the index" do
    visit applicant_custodians_url
    assert_selector "h1", text: "Applicant custodians"
  end

  test "should create applicant custodian" do
    visit applicant_custodians_url
    click_on "New applicant custodian"

    fill_in "Applicant", with: @applicant_custodian.applicant_id
    fill_in "Email", with: @applicant_custodian.email
    fill_in "First name", with: @applicant_custodian.first_name
    fill_in "House number", with: @applicant_custodian.house_number
    fill_in "Id card number", with: @applicant_custodian.id_card_number
    fill_in "Last name", with: @applicant_custodian.last_name
    fill_in "Middle name", with: @applicant_custodian.middle_name
    fill_in "Nationality", with: @applicant_custodian.nationality
    fill_in "Occupation", with: @applicant_custodian.occupation
    fill_in "Relation", with: @applicant_custodian.relation
    fill_in "Sub city", with: @applicant_custodian.sub_city
    fill_in "Telephone", with: @applicant_custodian.telephone
    fill_in "Woreda", with: @applicant_custodian.woreda
    click_on "Create Applicant custodian"

    assert_text "Applicant custodian was successfully created"
    click_on "Back"
  end

  test "should update Applicant custodian" do
    visit applicant_custodian_url(@applicant_custodian)
    click_on "Edit this applicant custodian", match: :first

    fill_in "Applicant", with: @applicant_custodian.applicant_id
    fill_in "Email", with: @applicant_custodian.email
    fill_in "First name", with: @applicant_custodian.first_name
    fill_in "House number", with: @applicant_custodian.house_number
    fill_in "Id card number", with: @applicant_custodian.id_card_number
    fill_in "Last name", with: @applicant_custodian.last_name
    fill_in "Middle name", with: @applicant_custodian.middle_name
    fill_in "Nationality", with: @applicant_custodian.nationality
    fill_in "Occupation", with: @applicant_custodian.occupation
    fill_in "Relation", with: @applicant_custodian.relation
    fill_in "Sub city", with: @applicant_custodian.sub_city
    fill_in "Telephone", with: @applicant_custodian.telephone
    fill_in "Woreda", with: @applicant_custodian.woreda
    click_on "Update Applicant custodian"

    assert_text "Applicant custodian was successfully updated"
    click_on "Back"
  end

  test "should destroy Applicant custodian" do
    visit applicant_custodian_url(@applicant_custodian)
    click_on "Destroy this applicant custodian", match: :first

    assert_text "Applicant custodian was successfully destroyed"
  end
end
