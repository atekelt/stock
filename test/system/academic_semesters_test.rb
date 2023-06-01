require "application_system_test_case"

class AcademicSemestersTest < ApplicationSystemTestCase
  setup do
    @academic_semester = academic_semesters(:one)
  end

  test "visiting the index" do
    visit academic_semesters_url
    assert_selector "h1", text: "Academic semesters"
  end

  test "should create academic semester" do
    visit academic_semesters_url
    click_on "New academic semester"

    fill_in "Academic year", with: @academic_semester.academic_year_id
    fill_in "End date", with: @academic_semester.end_date
    fill_in "Semester", with: @academic_semester.semester_id
    fill_in "Start date", with: @academic_semester.start_date
    check "Status" if @academic_semester.status
    click_on "Create Academic semester"

    assert_text "Academic semester was successfully created"
    click_on "Back"
  end

  test "should update Academic semester" do
    visit academic_semester_url(@academic_semester)
    click_on "Edit this academic semester", match: :first

    fill_in "Academic year", with: @academic_semester.academic_year_id
    fill_in "End date", with: @academic_semester.end_date
    fill_in "Semester", with: @academic_semester.semester_id
    fill_in "Start date", with: @academic_semester.start_date
    check "Status" if @academic_semester.status
    click_on "Update Academic semester"

    assert_text "Academic semester was successfully updated"
    click_on "Back"
  end

  test "should destroy Academic semester" do
    visit academic_semester_url(@academic_semester)
    click_on "Destroy this academic semester", match: :first

    assert_text "Academic semester was successfully destroyed"
  end
end
