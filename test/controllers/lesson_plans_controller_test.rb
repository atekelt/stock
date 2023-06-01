require "test_helper"

class LessonPlansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lesson_plan = lesson_plans(:one)
  end

  test "should get index" do
    get lesson_plans_url
    assert_response :success
  end

  test "should get new" do
    get new_lesson_plan_url
    assert_response :success
  end

  test "should create lesson_plan" do
    assert_difference("LessonPlan.count") do
      post lesson_plans_url, params: { lesson_plan: { curriculum_subject_id: @lesson_plan.curriculum_subject_id, staff_id: @lesson_plan.staff_id } }
    end

    assert_redirected_to lesson_plan_url(LessonPlan.last)
  end

  test "should show lesson_plan" do
    get lesson_plan_url(@lesson_plan)
    assert_response :success
  end

  test "should get edit" do
    get edit_lesson_plan_url(@lesson_plan)
    assert_response :success
  end

  test "should update lesson_plan" do
    patch lesson_plan_url(@lesson_plan), params: { lesson_plan: { curriculum_subject_id: @lesson_plan.curriculum_subject_id, staff_id: @lesson_plan.staff_id } }
    assert_redirected_to lesson_plan_url(@lesson_plan)
  end

  test "should destroy lesson_plan" do
    assert_difference("LessonPlan.count", -1) do
      delete lesson_plan_url(@lesson_plan)
    end

    assert_redirected_to lesson_plans_url
  end
end
