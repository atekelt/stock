require "application_system_test_case"

class StockInsTest < ApplicationSystemTestCase
  setup do
    @stock_in = stock_ins(:one)
  end

  test "visiting the index" do
    visit stock_ins_url
    assert_selector "h1", text: "Stock ins"
  end

  test "should create stock in" do
    visit stock_ins_url
    click_on "New stock in"

    fill_in "Cost", with: @stock_in.cost
    fill_in "Qty", with: @stock_in.qty
    fill_in "Qty type", with: @stock_in.qty_type_id
    fill_in "Stock item", with: @stock_in.stock_item_id
    fill_in "Total", with: @stock_in.total
    click_on "Create Stock in"

    assert_text "Stock in was successfully created"
    click_on "Back"
  end

  test "should update Stock in" do
    visit stock_in_url(@stock_in)
    click_on "Edit this stock in", match: :first

    fill_in "Cost", with: @stock_in.cost
    fill_in "Qty", with: @stock_in.qty
    fill_in "Qty type", with: @stock_in.qty_type_id
    fill_in "Stock item", with: @stock_in.stock_item_id
    fill_in "Total", with: @stock_in.total
    click_on "Update Stock in"

    assert_text "Stock in was successfully updated"
    click_on "Back"
  end

  test "should destroy Stock in" do
    visit stock_in_url(@stock_in)
    click_on "Destroy this stock in", match: :first

    assert_text "Stock in was successfully destroyed"
  end
end
