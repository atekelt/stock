require "test_helper"

class TeacherAssignmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @teacher_assignment = teacher_assignments(:one)
  end

  test "should get index" do
    get teacher_assignments_url
    assert_response :success
  end

  test "should get new" do
    get new_teacher_assignment_url
    assert_response :success
  end

  test "should create teacher_assignment" do
    assert_difference("TeacherAssignment.count") do
      post teacher_assignments_url, params: { teacher_assignment: { academic_year_id: @teacher_assignment.academic_year_id, grade_id: @teacher_assignment.grade_id, subject_id: @teacher_assignment.subject_id } }
    end

    assert_redirected_to teacher_assignment_url(TeacherAssignment.last)
  end

  test "should show teacher_assignment" do
    get teacher_assignment_url(@teacher_assignment)
    assert_response :success
  end

  test "should get edit" do
    get edit_teacher_assignment_url(@teacher_assignment)
    assert_response :success
  end

  test "should update teacher_assignment" do
    patch teacher_assignment_url(@teacher_assignment), params: { teacher_assignment: { academic_year_id: @teacher_assignment.academic_year_id, grade_id: @teacher_assignment.grade_id, subject_id: @teacher_assignment.subject_id } }
    assert_redirected_to teacher_assignment_url(@teacher_assignment)
  end

  test "should destroy teacher_assignment" do
    assert_difference("TeacherAssignment.count", -1) do
      delete teacher_assignment_url(@teacher_assignment)
    end

    assert_redirected_to teacher_assignments_url
  end
end
