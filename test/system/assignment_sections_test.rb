require "application_system_test_case"

class AssignmentSectionsTest < ApplicationSystemTestCase
  setup do
    @assignment_section = assignment_sections(:one)
  end

  test "visiting the index" do
    visit assignment_sections_url
    assert_selector "h1", text: "Assignment sections"
  end

  test "should create assignment section" do
    visit assignment_sections_url
    click_on "New assignment section"

    fill_in "Teacher assignment", with: @assignment_section.teacher_assignment_id
    fill_in "Section", with: @assignment_section.section_id
    fill_in "Status", with: @assignment_section.status
    click_on "Create Assignment section"

    assert_text "Assignment section was successfully created"
    click_on "Back"
  end

  test "should update Assignment section" do
    visit assignment_section_url(@assignment_section)
    click_on "Edit this assignment section", match: :first

    fill_in "Teacher assignment", with: @assignment_section.teacher_assignment_id
    fill_in "Section", with: @assignment_section.section_id
    fill_in "Status", with: @assignment_section.status
    click_on "Update Assignment section"

    assert_text "Assignment section was successfully updated"
    click_on "Back"
  end

  test "should destroy Assignment section" do
    visit assignment_section_url(@assignment_section)
    click_on "Destroy this assignment section", match: :first

    assert_text "Assignment section was successfully destroyed"
  end
end
