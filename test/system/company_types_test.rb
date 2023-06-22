require "application_system_test_case"

class CompanyTypesTest < ApplicationSystemTestCase
  setup do
    @company_type = company_types(:one)
  end

  test "visiting the index" do
    visit company_types_url
    assert_selector "h1", text: "Company types"
  end

  test "should create company type" do
    visit company_types_url
    click_on "New company type"

    fill_in "Name", with: @company_type.name
    click_on "Create Company type"

    assert_text "Company type was successfully created"
    click_on "Back"
  end

  test "should update Company type" do
    visit company_type_url(@company_type)
    click_on "Edit this company type", match: :first

    fill_in "Name", with: @company_type.name
    click_on "Update Company type"

    assert_text "Company type was successfully updated"
    click_on "Back"
  end

  test "should destroy Company type" do
    visit company_type_url(@company_type)
    click_on "Destroy this company type", match: :first

    assert_text "Company type was successfully destroyed"
  end
end
