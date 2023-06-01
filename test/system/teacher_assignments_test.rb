require "application_system_test_case"

class TeacherAssignmentsTest < ApplicationSystemTestCase
  setup do
    @teacher_assignment = teacher_assignments(:one)
  end

  test "visiting the index" do
    visit teacher_assignments_url
    assert_selector "h1", text: "Teacher assignments"
  end

  test "should create teacher assignment" do
    visit teacher_assignments_url
    click_on "New teacher assignment"

    fill_in "Academic year", with: @teacher_assignment.academic_year_id
    fill_in "Grade", with: @teacher_assignment.grade_id
    fill_in "Subject", with: @teacher_assignment.subject_id
    click_on "Create Teacher assignment"

    assert_text "Teacher assignment was successfully created"
    click_on "Back"
  end

  test "should update Teacher assignment" do
    visit teacher_assignment_url(@teacher_assignment)
    click_on "Edit this teacher assignment", match: :first

    fill_in "Academic year", with: @teacher_assignment.academic_year_id
    fill_in "Grade", with: @teacher_assignment.grade_id
    fill_in "Subject", with: @teacher_assignment.subject_id
    click_on "Update Teacher assignment"

    assert_text "Teacher assignment was successfully updated"
    click_on "Back"
  end

  test "should destroy Teacher assignment" do
    visit teacher_assignment_url(@teacher_assignment)
    click_on "Destroy this teacher assignment", match: :first

    assert_text "Teacher assignment was successfully destroyed"
  end
end
