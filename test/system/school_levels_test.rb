require "application_system_test_case"

class SchoolLevelsTest < ApplicationSystemTestCase
  setup do
    @school_level = school_levels(:one)
  end

  test "visiting the index" do
    visit school_levels_url
    assert_selector "h1", text: "School levels"
  end

  test "should create school level" do
    visit school_levels_url
    click_on "New school level"

    fill_in "Amharic name", with: @school_level.amharic_name
    fill_in "Description", with: @school_level.description
    fill_in "Name", with: @school_level.name
    fill_in "School", with: @school_level.school_id
    click_on "Create School level"

    assert_text "School level was successfully created"
    click_on "Back"
  end

  test "should update School level" do
    visit school_level_url(@school_level)
    click_on "Edit this school level", match: :first

    fill_in "Amharic name", with: @school_level.amharic_name
    fill_in "Description", with: @school_level.description
    fill_in "Name", with: @school_level.name
    fill_in "School", with: @school_level.school_id
    click_on "Update School level"

    assert_text "School level was successfully updated"
    click_on "Back"
  end

  test "should destroy School level" do
    visit school_level_url(@school_level)
    click_on "Destroy this school level", match: :first

    assert_text "School level was successfully destroyed"
  end
end
