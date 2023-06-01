require "test_helper"

class ApplicantCustodiansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @applicant_custodian = applicant_custodians(:one)
  end

  test "should get index" do
    get applicant_custodians_url
    assert_response :success
  end

  test "should get new" do
    get new_applicant_custodian_url
    assert_response :success
  end

  test "should create applicant_custodian" do
    assert_difference("ApplicantCustodian.count") do
      post applicant_custodians_url, params: { applicant_custodian: { applicant_id: @applicant_custodian.applicant_id, email: @applicant_custodian.email, first_name: @applicant_custodian.first_name, house_number: @applicant_custodian.house_number, id_card_number: @applicant_custodian.id_card_number, last_name: @applicant_custodian.last_name, middle_name: @applicant_custodian.middle_name, nationality: @applicant_custodian.nationality, occupation: @applicant_custodian.occupation, relation: @applicant_custodian.relation, sub_city: @applicant_custodian.sub_city, telephone: @applicant_custodian.telephone, woreda: @applicant_custodian.woreda } }
    end

    assert_redirected_to applicant_custodian_url(ApplicantCustodian.last)
  end

  test "should show applicant_custodian" do
    get applicant_custodian_url(@applicant_custodian)
    assert_response :success
  end

  test "should get edit" do
    get edit_applicant_custodian_url(@applicant_custodian)
    assert_response :success
  end

  test "should update applicant_custodian" do
    patch applicant_custodian_url(@applicant_custodian), params: { applicant_custodian: { applicant_id: @applicant_custodian.applicant_id, email: @applicant_custodian.email, first_name: @applicant_custodian.first_name, house_number: @applicant_custodian.house_number, id_card_number: @applicant_custodian.id_card_number, last_name: @applicant_custodian.last_name, middle_name: @applicant_custodian.middle_name, nationality: @applicant_custodian.nationality, occupation: @applicant_custodian.occupation, relation: @applicant_custodian.relation, sub_city: @applicant_custodian.sub_city, telephone: @applicant_custodian.telephone, woreda: @applicant_custodian.woreda } }
    assert_redirected_to applicant_custodian_url(@applicant_custodian)
  end

  test "should destroy applicant_custodian" do
    assert_difference("ApplicantCustodian.count", -1) do
      delete applicant_custodian_url(@applicant_custodian)
    end

    assert_redirected_to applicant_custodians_url
  end
end
