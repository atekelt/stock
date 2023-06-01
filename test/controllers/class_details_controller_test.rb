require "test_helper"

class ClassDetailsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get class_details_index_url
    assert_response :success
  end
end
