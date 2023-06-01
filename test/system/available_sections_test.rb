require "application_system_test_case"

class AvailableSectionsTest < ApplicationSystemTestCase
  setup do
    @available_section = available_sections(:one)
  end

  test "visiting the index" do
    visit available_sections_url
    assert_selector "h1", text: "Available sections"
  end

  test "should create available section" do
    visit available_sections_url
    click_on "New available section"

    fill_in "Grade", with: @available_section.grade_id
    fill_in "No of section", with: @available_section.no_of_section
    click_on "Create Available section"

    assert_text "Available section was successfully created"
    click_on "Back"
  end

  test "should update Available section" do
    visit available_section_url(@available_section)
    click_on "Edit this available section", match: :first

    fill_in "Grade", with: @available_section.grade_id
    fill_in "No of section", with: @available_section.no_of_section
    click_on "Update Available section"

    assert_text "Available section was successfully updated"
    click_on "Back"
  end

  test "should destroy Available section" do
    visit available_section_url(@available_section)
    click_on "Destroy this available section", match: :first

    assert_text "Available section was successfully destroyed"
  end
end
