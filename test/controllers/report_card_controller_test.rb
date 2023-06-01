require "test_helper"

class ReportCardControllerTest < ActionDispatch::IntegrationTest
  test "should get report_card_list" do
    get report_card_report_card_list_url
    assert_response :success
  end

  test "should get report_card_detail" do
    get report_card_report_card_detail_url
    assert_response :success
  end
end
