require "test_helper"

class AssessmentResultsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @assessment_result = assessment_results(:one)
  end

  test "should get index" do
    get assessment_results_url
    assert_response :success
  end

  test "should get new" do
    get new_assessment_result_url
    assert_response :success
  end

  test "should create assessment_result" do
    assert_difference("AssessmentResult.count") do
      post assessment_results_url, params: { assessment_result: { assessment_id: @assessment_result.assessment_id, enrollment_id: @assessment_result.enrollment_id, result: @assessment_result.result } }
    end

    assert_redirected_to assessment_result_url(AssessmentResult.last)
  end

  test "should show assessment_result" do
    get assessment_result_url(@assessment_result)
    assert_response :success
  end

  test "should get edit" do
    get edit_assessment_result_url(@assessment_result)
    assert_response :success
  end

  test "should update assessment_result" do
    patch assessment_result_url(@assessment_result), params: { assessment_result: { assessment_id: @assessment_result.assessment_id, enrollment_id: @assessment_result.enrollment_id, result: @assessment_result.result } }
    assert_redirected_to assessment_result_url(@assessment_result)
  end

  test "should destroy assessment_result" do
    assert_difference("AssessmentResult.count", -1) do
      delete assessment_result_url(@assessment_result)
    end

    assert_redirected_to assessment_results_url
  end
end
