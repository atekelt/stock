require "test_helper"

class StockOutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stock_out = stock_outs(:one)
  end

  test "should get index" do
    get stock_outs_url
    assert_response :success
  end

  test "should get new" do
    get new_stock_out_url
    assert_response :success
  end

  test "should create stock_out" do
    assert_difference("StockOut.count") do
      post stock_outs_url, params: { stock_out: { cost: @stock_out.cost, qty: @stock_out.qty, qty_type_id: @stock_out.qty_type_id, stock_item_id: @stock_out.stock_item_id, total: @stock_out.total } }
    end

    assert_redirected_to stock_out_url(StockOut.last)
  end

  test "should show stock_out" do
    get stock_out_url(@stock_out)
    assert_response :success
  end

  test "should get edit" do
    get edit_stock_out_url(@stock_out)
    assert_response :success
  end

  test "should update stock_out" do
    patch stock_out_url(@stock_out), params: { stock_out: { cost: @stock_out.cost, qty: @stock_out.qty, qty_type_id: @stock_out.qty_type_id, stock_item_id: @stock_out.stock_item_id, total: @stock_out.total } }
    assert_redirected_to stock_out_url(@stock_out)
  end

  test "should destroy stock_out" do
    assert_difference("StockOut.count", -1) do
      delete stock_out_url(@stock_out)
    end

    assert_redirected_to stock_outs_url
  end
end
