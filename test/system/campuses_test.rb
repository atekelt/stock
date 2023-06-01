require "application_system_test_case"

class CampusesTest < ApplicationSystemTestCase
  setup do
    @campus = campuses(:one)
  end

  test "visiting the index" do
    visit campuses_url
    assert_selector "h1", text: "Campuses"
  end

  test "should create campus" do
    visit campuses_url
    click_on "New campus"

    fill_in "Name", with: @campus.name
    fill_in "School", with: @campus.school_id
    click_on "Create Campus"

    assert_text "Campus was successfully created"
    click_on "Back"
  end

  test "should update Campus" do
    visit campus_url(@campus)
    click_on "Edit this campus", match: :first

    fill_in "Name", with: @campus.name
    fill_in "School", with: @campus.school_id
    click_on "Update Campus"

    assert_text "Campus was successfully updated"
    click_on "Back"
  end

  test "should destroy Campus" do
    visit campus_url(@campus)
    click_on "Destroy this campus", match: :first

    assert_text "Campus was successfully destroyed"
  end
end
