require "application_system_test_case"

class StaffsTest < ApplicationSystemTestCase
  setup do
    @staff = staffs(:one)
  end

  test "visiting the index" do
    visit staffs_url
    assert_selector "h1", text: "Staffs"
  end

  test "should create staff" do
    visit staffs_url
    click_on "New staff"

    fill_in "Campus", with: @staff.campus_id
    fill_in "Employment date", with: @staff.employment_date
    fill_in "Person", with: @staff.person_id
    fill_in "School", with: @staff.school_id
    fill_in "Staff type", with: @staff.staff_type_id
    fill_in "Status", with: @staff.status
    click_on "Create Staff"

    assert_text "Staff was successfully created"
    click_on "Back"
  end

  test "should update Staff" do
    visit staff_url(@staff)
    click_on "Edit this staff", match: :first

    fill_in "Campus", with: @staff.campus_id
    fill_in "Employment date", with: @staff.employment_date
    fill_in "Person", with: @staff.person_id
    fill_in "School", with: @staff.school_id
    fill_in "Staff type", with: @staff.staff_type_id
    fill_in "Status", with: @staff.status
    click_on "Update Staff"

    assert_text "Staff was successfully updated"
    click_on "Back"
  end

  test "should destroy Staff" do
    visit staff_url(@staff)
    click_on "Destroy this staff", match: :first

    assert_text "Staff was successfully destroyed"
  end
end
