require "application_system_test_case"

class QtyTypesTest < ApplicationSystemTestCase
  setup do
    @qty_type = qty_types(:one)
  end

  test "visiting the index" do
    visit qty_types_url
    assert_selector "h1", text: "Qty types"
  end

  test "should create qty type" do
    visit qty_types_url
    click_on "New qty type"

    fill_in "Name", with: @qty_type.name
    click_on "Create Qty type"

    assert_text "Qty type was successfully created"
    click_on "Back"
  end

  test "should update Qty type" do
    visit qty_type_url(@qty_type)
    click_on "Edit this qty type", match: :first

    fill_in "Name", with: @qty_type.name
    click_on "Update Qty type"

    assert_text "Qty type was successfully updated"
    click_on "Back"
  end

  test "should destroy Qty type" do
    visit qty_type_url(@qty_type)
    click_on "Destroy this qty type", match: :first

    assert_text "Qty type was successfully destroyed"
  end
end
