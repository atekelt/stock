require "test_helper"

class PenaltyLogsControllerTest < ActionDispatch::IntegrationTest
  test "should get change" do
    get penalty_logs_change_url
    assert_response :success
  end
end
