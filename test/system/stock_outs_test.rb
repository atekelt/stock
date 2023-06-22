require "application_system_test_case"

class StockOutsTest < ApplicationSystemTestCase
  setup do
    @stock_out = stock_outs(:one)
  end

  test "visiting the index" do
    visit stock_outs_url
    assert_selector "h1", text: "Stock outs"
  end

  test "should create stock out" do
    visit stock_outs_url
    click_on "New stock out"

    fill_in "Cost", with: @stock_out.cost
    fill_in "Qty", with: @stock_out.qty
    fill_in "Qty type", with: @stock_out.qty_type_id
    fill_in "Stock item", with: @stock_out.stock_item_id
    fill_in "Total", with: @stock_out.total
    click_on "Create Stock out"

    assert_text "Stock out was successfully created"
    click_on "Back"
  end

  test "should update Stock out" do
    visit stock_out_url(@stock_out)
    click_on "Edit this stock out", match: :first

    fill_in "Cost", with: @stock_out.cost
    fill_in "Qty", with: @stock_out.qty
    fill_in "Qty type", with: @stock_out.qty_type_id
    fill_in "Stock item", with: @stock_out.stock_item_id
    fill_in "Total", with: @stock_out.total
    click_on "Update Stock out"

    assert_text "Stock out was successfully updated"
    click_on "Back"
  end

  test "should destroy Stock out" do
    visit stock_out_url(@stock_out)
    click_on "Destroy this stock out", match: :first

    assert_text "Stock out was successfully destroyed"
  end
end
