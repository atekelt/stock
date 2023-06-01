require "application_system_test_case"

class AttendanceReportsTest < ApplicationSystemTestCase
  setup do
    @attendance_report = attendance_reports(:one)
  end

  test "visiting the index" do
    visit attendance_reports_url
    assert_selector "h1", text: "Attendance reports"
  end

  test "should create attendance report" do
    visit attendance_reports_url
    click_on "New attendance report"

    fill_in "Absent count", with: @attendance_report.absent_count
    fill_in "Attendance dates", with: @attendance_report.attendance_dates
    fill_in "Present count", with: @attendance_report.present_count
    fill_in "Registration", with: @attendance_report.registration_id
    fill_in "Tardy count", with: @attendance_report.tardy_count
    click_on "Create Attendance report"

    assert_text "Attendance report was successfully created"
    click_on "Back"
  end

  test "should update Attendance report" do
    visit attendance_report_url(@attendance_report)
    click_on "Edit this attendance report", match: :first

    fill_in "Absent count", with: @attendance_report.absent_count
    fill_in "Attendance dates", with: @attendance_report.attendance_dates
    fill_in "Present count", with: @attendance_report.present_count
    fill_in "Registration", with: @attendance_report.registration_id
    fill_in "Tardy count", with: @attendance_report.tardy_count
    click_on "Update Attendance report"

    assert_text "Attendance report was successfully updated"
    click_on "Back"
  end

  test "should destroy Attendance report" do
    visit attendance_report_url(@attendance_report)
    click_on "Destroy this attendance report", match: :first

    assert_text "Attendance report was successfully destroyed"
  end
end
