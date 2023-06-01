require "application_system_test_case"

class LessonPlansTest < ApplicationSystemTestCase
  setup do
    @lesson_plan = lesson_plans(:one)
  end

  test "visiting the index" do
    visit lesson_plans_url
    assert_selector "h1", text: "Lesson plans"
  end

  test "should create lesson plan" do
    visit lesson_plans_url
    click_on "New lesson plan"

    fill_in "Curriculum subject", with: @lesson_plan.curriculum_subject_id
    fill_in "Staff", with: @lesson_plan.staff_id
    click_on "Create Lesson plan"

    assert_text "Lesson plan was successfully created"
    click_on "Back"
  end

  test "should update Lesson plan" do
    visit lesson_plan_url(@lesson_plan)
    click_on "Edit this lesson plan", match: :first

    fill_in "Curriculum subject", with: @lesson_plan.curriculum_subject_id
    fill_in "Staff", with: @lesson_plan.staff_id
    click_on "Update Lesson plan"

    assert_text "Lesson plan was successfully updated"
    click_on "Back"
  end

  test "should destroy Lesson plan" do
    visit lesson_plan_url(@lesson_plan)
    click_on "Destroy this lesson plan", match: :first

    assert_text "Lesson plan was successfully destroyed"
  end
end
