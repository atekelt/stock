require "application_system_test_case"

class WoredasTest < ApplicationSystemTestCase
  setup do
    @woreda = woredas(:one)
  end

  test "visiting the index" do
    visit woredas_url
    assert_selector "h1", text: "Woredas"
  end

  test "should create woreda" do
    visit woredas_url
    click_on "New woreda"

    fill_in "Name", with: @woreda.name
    fill_in "Zone", with: @woreda.zone_id
    click_on "Create Woreda"

    assert_text "Woreda was successfully created"
    click_on "Back"
  end

  test "should update Woreda" do
    visit woreda_url(@woreda)
    click_on "Edit this woreda", match: :first

    fill_in "Name", with: @woreda.name
    fill_in "Zone", with: @woreda.zone_id
    click_on "Update Woreda"

    assert_text "Woreda was successfully updated"
    click_on "Back"
  end

  test "should destroy Woreda" do
    visit woreda_url(@woreda)
    click_on "Destroy this woreda", match: :first

    assert_text "Woreda was successfully destroyed"
  end
end
