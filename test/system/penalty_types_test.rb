require "application_system_test_case"

class PenaltyTypesTest < ApplicationSystemTestCase
  setup do
    @penalty_type = penalty_types(:one)
  end

  test "visiting the index" do
    visit penalty_types_url
    assert_selector "h1", text: "Penalty types"
  end

  test "should create penalty type" do
    visit penalty_types_url
    click_on "New penalty type"

    fill_in "Description", with: @penalty_type.description
    fill_in "Name", with: @penalty_type.name
    click_on "Create Penalty type"

    assert_text "Penalty type was successfully created"
    click_on "Back"
  end

  test "should update Penalty type" do
    visit penalty_type_url(@penalty_type)
    click_on "Edit this penalty type", match: :first

    fill_in "Description", with: @penalty_type.description
    fill_in "Name", with: @penalty_type.name
    click_on "Update Penalty type"

    assert_text "Penalty type was successfully updated"
    click_on "Back"
  end

  test "should destroy Penalty type" do
    visit penalty_type_url(@penalty_type)
    click_on "Destroy this penalty type", match: :first

    assert_text "Penalty type was successfully destroyed"
  end
end
