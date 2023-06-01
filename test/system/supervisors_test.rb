require "application_system_test_case"

class SupervisorsTest < ApplicationSystemTestCase
  setup do
    @class_room_teacher = supervisors(:one)
  end

  test "visiting the index" do
    visit supervisors_url
    assert_selector "h1", text: "Supervisors"
  end

  test "should create supervisor" do
    visit supervisors_url
    click_on "New supervisor"

    fill_in "Grade", with: @class_room_teacher.grade_id
    fill_in "Staff", with: @class_room_teacher.staff_id
    click_on "Create Supervisor"

    assert_text "Supervisor was successfully created"
    click_on "Back"
  end

  test "should update Supervisor" do
    visit supervisor_url(@class_room_teacher)
    click_on "Edit this supervisor", match: :first

    fill_in "Grade", with: @class_room_teacher.grade_id
    fill_in "Staff", with: @class_room_teacher.staff_id
    click_on "Update Supervisor"

    assert_text "Supervisor was successfully updated"
    click_on "Back"
  end

  test "should destroy Supervisor" do
    visit supervisor_url(@class_room_teacher)
    click_on "Destroy this supervisor", match: :first

    assert_text "Supervisor was successfully destroyed"
  end
end
