require "test_helper"

class StockInsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stock_in = stock_ins(:one)
  end

  test "should get index" do
    get stock_ins_url
    assert_response :success
  end

  test "should get new" do
    get new_stock_in_url
    assert_response :success
  end

  test "should create stock_in" do
    assert_difference("StockIn.count") do
      post stock_ins_url, params: { stock_in: { cost: @stock_in.cost, qty: @stock_in.qty, qty_type_id: @stock_in.qty_type_id, stock_item_id: @stock_in.stock_item_id, total: @stock_in.total } }
    end

    assert_redirected_to stock_in_url(StockIn.last)
  end

  test "should show stock_in" do
    get stock_in_url(@stock_in)
    assert_response :success
  end

  test "should get edit" do
    get edit_stock_in_url(@stock_in)
    assert_response :success
  end

  test "should update stock_in" do
    patch stock_in_url(@stock_in), params: { stock_in: { cost: @stock_in.cost, qty: @stock_in.qty, qty_type_id: @stock_in.qty_type_id, stock_item_id: @stock_in.stock_item_id, total: @stock_in.total } }
    assert_redirected_to stock_in_url(@stock_in)
  end

  test "should destroy stock_in" do
    assert_difference("StockIn.count", -1) do
      delete stock_in_url(@stock_in)
    end

    assert_redirected_to stock_ins_url
  end
end
