require "test_helper"

class SupervisorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @class_room_teacher = supervisors(:one)
  end

  test "should get index" do
    get supervisors_url
    assert_response :success
  end

  test "should get new" do
    get new_supervisor_url
    assert_response :success
  end

  test "should create supervisor" do
    assert_difference("Supervisor.count") do
      post supervisors_url, params: { supervisor: { grade_id: @class_room_teacher.grade_id, staff_id: @class_room_teacher.staff_id } }
    end

    assert_redirected_to supervisor_url(Supervisor.last)
  end

  test "should show supervisor" do
    get supervisor_url(@class_room_teacher)
    assert_response :success
  end

  test "should get edit" do
    get edit_supervisor_url(@class_room_teacher)
    assert_response :success
  end

  test "should update supervisor" do
    patch supervisor_url(@class_room_teacher), params: { supervisor: { grade_id: @class_room_teacher.grade_id, staff_id: @class_room_teacher.staff_id } }
    assert_redirected_to supervisor_url(@class_room_teacher)
  end

  test "should destroy supervisor" do
    assert_difference("Supervisor.count", -1) do
      delete supervisor_url(@class_room_teacher)
    end

    assert_redirected_to supervisors_url
  end
end
