require "test_helper"

class ClassRoomTeachersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @class_room_teacher = class_room_teachers(:one)
  end

  test "should get index" do
    get class_room_teachers_url
    assert_response :success
  end

  test "should get new" do
    get new_class_room_teacher_url
    assert_response :success
  end

  test "should create class_room_teacher" do
    assert_difference("ClassRoomTeacher.count") do
      post class_room_teachers_url, params: { class_room_teacher: { academic_year_id: @class_room_teacher.academic_year_id, grade_id: @class_room_teacher.grade_id, section_id: @class_room_teacher.section_id, staff_id: @class_room_teacher.staff_id, status: @class_room_teacher.status } }
    end

    assert_redirected_to class_room_teacher_url(ClassRoomTeacher.last)
  end

  test "should show class_room_teacher" do
    get class_room_teacher_url(@class_room_teacher)
    assert_response :success
  end

  test "should get edit" do
    get edit_class_room_teacher_url(@class_room_teacher)
    assert_response :success
  end

  test "should update class_room_teacher" do
    patch class_room_teacher_url(@class_room_teacher), params: { class_room_teacher: { academic_year_id: @class_room_teacher.academic_year_id, grade_id: @class_room_teacher.grade_id, section_id: @class_room_teacher.section_id, staff_id: @class_room_teacher.staff_id, status: @class_room_teacher.status } }
    assert_redirected_to class_room_teacher_url(@class_room_teacher)
  end

  test "should destroy class_room_teacher" do
    assert_difference("ClassRoomTeacher.count", -1) do
      delete class_room_teacher_url(@class_room_teacher)
    end

    assert_redirected_to class_room_teachers_url
  end
end
