require "test_helper"

class AcademicSemestersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @academic_semester = academic_semesters(:one)
  end

  test "should get index" do
    get academic_semesters_url
    assert_response :success
  end

  test "should get new" do
    get new_academic_semester_url
    assert_response :success
  end

  test "should create academic_semester" do
    assert_difference("AcademicSemester.count") do
      post academic_semesters_url, params: { academic_semester: { academic_year_id: @academic_semester.academic_year_id, end_date: @academic_semester.end_date, semester_id: @academic_semester.semester_id, start_date: @academic_semester.start_date, status: @academic_semester.status } }
    end

    assert_redirected_to academic_semester_url(AcademicSemester.last)
  end

  test "should show academic_semester" do
    get academic_semester_url(@academic_semester)
    assert_response :success
  end

  test "should get edit" do
    get edit_academic_semester_url(@academic_semester)
    assert_response :success
  end

  test "should update academic_semester" do
    patch academic_semester_url(@academic_semester), params: { academic_semester: { academic_year_id: @academic_semester.academic_year_id, end_date: @academic_semester.end_date, semester_id: @academic_semester.semester_id, start_date: @academic_semester.start_date, status: @academic_semester.status } }
    assert_redirected_to academic_semester_url(@academic_semester)
  end

  test "should destroy academic_semester" do
    assert_difference("AcademicSemester.count", -1) do
      delete academic_semester_url(@academic_semester)
    end

    assert_redirected_to academic_semesters_url
  end
end
