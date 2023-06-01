require "test_helper"

class FamilyInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @family_info = family_infos(:one)
  end

  test "should get index" do
    get family_infos_url
    assert_response :success
  end

  test "should get new" do
    get new_family_info_url
    assert_response :success
  end

  test "should create family_info" do
    assert_difference("FamilyInfo.count") do
      post family_infos_url, params: { family_info: { email: @family_info.email, full_name: @family_info.full_name, house_number: @family_info.house_number, id_card_number: @family_info.id_card_number, occupation: @family_info.occupation, person_id: @family_info.person_id, phone: @family_info.phone, relation: @family_info.relation, sub_city: @family_info.sub_city, woreda: @family_info.woreda } }
    end

    assert_redirected_to family_info_url(FamilyInfo.last)
  end

  test "should show family_info" do
    get family_info_url(@family_info)
    assert_response :success
  end

  test "should get edit" do
    get edit_family_info_url(@family_info)
    assert_response :success
  end

  test "should update family_info" do
    patch family_info_url(@family_info), params: { family_info: { email: @family_info.email, full_name: @family_info.full_name, house_number: @family_info.house_number, id_card_number: @family_info.id_card_number, occupation: @family_info.occupation, person_id: @family_info.person_id, phone: @family_info.phone, relation: @family_info.relation, sub_city: @family_info.sub_city, woreda: @family_info.woreda } }
    assert_redirected_to family_info_url(@family_info)
  end

  test "should destroy family_info" do
    assert_difference("FamilyInfo.count", -1) do
      delete family_info_url(@family_info)
    end

    assert_redirected_to family_infos_url
  end
end
