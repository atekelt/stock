require "application_system_test_case"

class TotalGradesTest < ApplicationSystemTestCase
  setup do
    @total_grade = total_grades(:one)
  end

  test "visiting the index" do
    visit total_grades_url
    assert_selector "h1", text: "Total grades"
  end

  test "should create total grade" do
    visit total_grades_url
    click_on "New total grade"

    fill_in "Registration", with: @total_grade.registration_id
    fill_in "Total result", with: @total_grade.total_result
    click_on "Create Total grade"

    assert_text "Total grade was successfully created"
    click_on "Back"
  end

  test "should update Total grade" do
    visit total_grade_url(@total_grade)
    click_on "Edit this total grade", match: :first

    fill_in "Registration", with: @total_grade.registration_id
    fill_in "Total result", with: @total_grade.total_result
    click_on "Update Total grade"

    assert_text "Total grade was successfully updated"
    click_on "Back"
  end

  test "should destroy Total grade" do
    visit total_grade_url(@total_grade)
    click_on "Destroy this total grade", match: :first

    assert_text "Total grade was successfully destroyed"
  end
end
