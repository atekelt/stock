require "test_helper"

class SmsesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @smse = smses(:one)
  end

  test "should get index" do
    get smses_url
    assert_response :success
  end

  test "should get new" do
    get new_smse_url
    assert_response :success
  end

  test "should create smse" do
    assert_difference("Smse.count") do
      post smses_url, params: { smse: { bill_id: @smse.bill_id, message_type: @smse.message_type, status: @smse.status } }
    end

    assert_redirected_to smse_url(Smse.last)
  end

  test "should show smse" do
    get smse_url(@smse)
    assert_response :success
  end

  test "should get edit" do
    get edit_smse_url(@smse)
    assert_response :success
  end

  test "should update smse" do
    patch smse_url(@smse), params: { smse: { bill_id: @smse.bill_id, message_type: @smse.message_type, status: @smse.status } }
    assert_redirected_to smse_url(@smse)
  end

  test "should destroy smse" do
    assert_difference("Smse.count", -1) do
      delete smse_url(@smse)
    end

    assert_redirected_to smses_url
  end
end
