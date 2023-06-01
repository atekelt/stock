require "test_helper"

class StudentCustodiansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student_custodian = student_custodians(:one)
  end

  test "should get index" do
    get student_custodians_url
    assert_response :success
  end

  test "should get new" do
    get new_student_custodian_url
    assert_response :success
  end

  test "should create student_custodian" do
    assert_difference("StudentCustodian.count") do
      post student_custodians_url, params: { student_custodian: { family_info_id: @student_custodian.family_info_id, student_id: @student_custodian.student_id } }
    end

    assert_redirected_to student_custodian_url(StudentCustodian.last)
  end

  test "should show student_custodian" do
    get student_custodian_url(@student_custodian)
    assert_response :success
  end

  test "should get edit" do
    get edit_student_custodian_url(@student_custodian)
    assert_response :success
  end

  test "should update student_custodian" do
    patch student_custodian_url(@student_custodian), params: { student_custodian: { family_info_id: @student_custodian.family_info_id, student_id: @student_custodian.student_id } }
    assert_redirected_to student_custodian_url(@student_custodian)
  end

  test "should destroy student_custodian" do
    assert_difference("StudentCustodian.count", -1) do
      delete student_custodian_url(@student_custodian)
    end

    assert_redirected_to student_custodians_url
  end
end
