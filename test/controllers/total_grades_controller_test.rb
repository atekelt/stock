require "test_helper"

class TotalGradesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @total_grade = total_grades(:one)
  end

  test "should get index" do
    get total_grades_url
    assert_response :success
  end

  test "should get new" do
    get new_total_grade_url
    assert_response :success
  end

  test "should create total_grade" do
    assert_difference("TotalGrade.count") do
      post total_grades_url, params: { total_grade: { registration_id: @total_grade.registration_id, total_result: @total_grade.total_result } }
    end

    assert_redirected_to total_grade_url(TotalGrade.last)
  end

  test "should show total_grade" do
    get total_grade_url(@total_grade)
    assert_response :success
  end

  test "should get edit" do
    get edit_total_grade_url(@total_grade)
    assert_response :success
  end

  test "should update total_grade" do
    patch total_grade_url(@total_grade), params: { total_grade: { registration_id: @total_grade.registration_id, total_result: @total_grade.total_result } }
    assert_redirected_to total_grade_url(@total_grade)
  end

  test "should destroy total_grade" do
    assert_difference("TotalGrade.count", -1) do
      delete total_grade_url(@total_grade)
    end

    assert_redirected_to total_grades_url
  end
end
