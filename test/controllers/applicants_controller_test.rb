require "test_helper"

class ApplicantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @applicant = applicants(:one)
  end

  test "should get index" do
    get applicants_url
    assert_response :success
  end

  test "should get new" do
    get new_applicant_url
    assert_response :success
  end

  test "should create applicant" do
    assert_difference("Applicant.count") do
      post applicants_url, params: { applicant: { age: @applicant.age, date_of_birth: @applicant.date_of_birth, emergency_contact_full_name: @applicant.emergency_contact_full_name, emergency_contact_relation: @applicant.emergency_contact_relation, emergency_contact_telephone: @applicant.emergency_contact_telephone, first_name: @applicant.first_name, grade: @applicant.grade, last_name: @applicant.last_name, medical_issues: @applicant.medical_issues, middle_name: @applicant.middle_name, nationality: @applicant.nationality, number_of_years: @applicant.number_of_years, previous_school_name: @applicant.previous_school_name, sex: @applicant.sex } }
    end

    assert_redirected_to applicant_url(Applicant.last)
  end

  test "should show applicant" do
    get applicant_url(@applicant)
    assert_response :success
  end

  test "should get edit" do
    get edit_applicant_url(@applicant)
    assert_response :success
  end

  test "should update applicant" do
    patch applicant_url(@applicant), params: { applicant: { age: @applicant.age, date_of_birth: @applicant.date_of_birth, emergency_contact_full_name: @applicant.emergency_contact_full_name, emergency_contact_relation: @applicant.emergency_contact_relation, emergency_contact_telephone: @applicant.emergency_contact_telephone, first_name: @applicant.first_name, grade: @applicant.grade, last_name: @applicant.last_name, medical_issues: @applicant.medical_issues, middle_name: @applicant.middle_name, nationality: @applicant.nationality, number_of_years: @applicant.number_of_years, previous_school_name: @applicant.previous_school_name, sex: @applicant.sex } }
    assert_redirected_to applicant_url(@applicant)
  end

  test "should destroy applicant" do
    assert_difference("Applicant.count", -1) do
      delete applicant_url(@applicant)
    end

    assert_redirected_to applicants_url
  end
end
