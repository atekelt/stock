require "test_helper"

class WoredasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @woreda = woredas(:one)
  end

  test "should get index" do
    get woredas_url
    assert_response :success
  end

  test "should get new" do
    get new_woreda_url
    assert_response :success
  end

  test "should create woreda" do
    assert_difference("Woreda.count") do
      post woredas_url, params: { woreda: { name: @woreda.name, zone_id: @woreda.zone_id } }
    end

    assert_redirected_to woreda_url(Woreda.last)
  end

  test "should show woreda" do
    get woreda_url(@woreda)
    assert_response :success
  end

  test "should get edit" do
    get edit_woreda_url(@woreda)
    assert_response :success
  end

  test "should update woreda" do
    patch woreda_url(@woreda), params: { woreda: { name: @woreda.name, zone_id: @woreda.zone_id } }
    assert_redirected_to woreda_url(@woreda)
  end

  test "should destroy woreda" do
    assert_difference("Woreda.count", -1) do
      delete woreda_url(@woreda)
    end

    assert_redirected_to woredas_url
  end
end
