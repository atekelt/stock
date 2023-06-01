require "test_helper"

class PenaltyTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @penalty_type = penalty_types(:one)
  end

  test "should get index" do
    get penalty_types_url
    assert_response :success
  end

  test "should get new" do
    get new_penalty_type_url
    assert_response :success
  end

  test "should create penalty_type" do
    assert_difference("PenaltyType.count") do
      post penalty_types_url, params: { penalty_type: { description: @penalty_type.description, name: @penalty_type.name } }
    end

    assert_redirected_to penalty_type_url(PenaltyType.last)
  end

  test "should show penalty_type" do
    get penalty_type_url(@penalty_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_penalty_type_url(@penalty_type)
    assert_response :success
  end

  test "should update penalty_type" do
    patch penalty_type_url(@penalty_type), params: { penalty_type: { description: @penalty_type.description, name: @penalty_type.name } }
    assert_redirected_to penalty_type_url(@penalty_type)
  end

  test "should destroy penalty_type" do
    assert_difference("PenaltyType.count", -1) do
      delete penalty_type_url(@penalty_type)
    end

    assert_redirected_to penalty_types_url
  end
end
