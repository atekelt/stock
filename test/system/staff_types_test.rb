require "application_system_test_case"

class StaffTypesTest < ApplicationSystemTestCase
  setup do
    @staff_type = staff_types(:one)
  end

  test "visiting the index" do
    visit staff_types_url
    assert_selector "h1", text: "Staff types"
  end

  test "should create staff type" do
    visit staff_types_url
    click_on "New staff type"

    fill_in "Name", with: @staff_type.name
    click_on "Create Staff type"

    assert_text "Staff type was successfully created"
    click_on "Back"
  end

  test "should update Staff type" do
    visit staff_type_url(@staff_type)
    click_on "Edit this staff type", match: :first

    fill_in "Name", with: @staff_type.name
    click_on "Update Staff type"

    assert_text "Staff type was successfully updated"
    click_on "Back"
  end

  test "should destroy Staff type" do
    visit staff_type_url(@staff_type)
    click_on "Destroy this staff type", match: :first

    assert_text "Staff type was successfully destroyed"
  end
end
