require "application_system_test_case"

class ClassRoomTeachersTest < ApplicationSystemTestCase
  setup do
    @class_room_teacher = class_room_teachers(:one)
  end

  test "visiting the index" do
    visit class_room_teachers_url
    assert_selector "h1", text: "Class room teachers"
  end

  test "should create class room teacher" do
    visit class_room_teachers_url
    click_on "New class room teacher"

    fill_in "Academic year", with: @class_room_teacher.academic_year_id
    fill_in "Grade", with: @class_room_teacher.grade_id
    fill_in "Section", with: @class_room_teacher.section_id
    fill_in "Staff", with: @class_room_teacher.staff_id
    check "Status" if @class_room_teacher.status
    click_on "Create Class room teacher"

    assert_text "Class room teacher was successfully created"
    click_on "Back"
  end

  test "should update Class room teacher" do
    visit class_room_teacher_url(@class_room_teacher)
    click_on "Edit this class room teacher", match: :first

    fill_in "Academic year", with: @class_room_teacher.academic_year_id
    fill_in "Grade", with: @class_room_teacher.grade_id
    fill_in "Section", with: @class_room_teacher.section_id
    fill_in "Staff", with: @class_room_teacher.staff_id
    check "Status" if @class_room_teacher.status
    click_on "Update Class room teacher"

    assert_text "Class room teacher was successfully updated"
    click_on "Back"
  end

  test "should destroy Class room teacher" do
    visit class_room_teacher_url(@class_room_teacher)
    click_on "Destroy this class room teacher", match: :first

    assert_text "Class room teacher was successfully destroyed"
  end
end
