require "application_system_test_case"

class ClassRoomsTest < ApplicationSystemTestCase
  setup do
    @class_room = class_rooms(:one)
  end

  test "visiting the index" do
    visit class_rooms_url
    assert_selector "h1", text: "Class rooms"
  end

  test "should create class room" do
    visit class_rooms_url
    click_on "New class room"

    fill_in "Capacity", with: @class_room.capacity
    fill_in "Name", with: @class_room.name
    click_on "Create Class room"

    assert_text "Class room was successfully created"
    click_on "Back"
  end

  test "should update Class room" do
    visit class_room_url(@class_room)
    click_on "Edit this class room", match: :first

    fill_in "Capacity", with: @class_room.capacity
    fill_in "Name", with: @class_room.name
    click_on "Update Class room"

    assert_text "Class room was successfully updated"
    click_on "Back"
  end

  test "should destroy Class room" do
    visit class_room_url(@class_room)
    click_on "Destroy this class room", match: :first

    assert_text "Class room was successfully destroyed"
  end
end
