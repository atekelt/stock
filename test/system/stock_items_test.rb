require "application_system_test_case"

class StockItemsTest < ApplicationSystemTestCase
  setup do
    @stock_item = stock_items(:one)
  end

  test "visiting the index" do
    visit stock_items_url
    assert_selector "h1", text: "Stock items"
  end

  test "should create stock item" do
    visit stock_items_url
    click_on "New stock item"

    fill_in "Company", with: @stock_item.company_id
    fill_in "Cost", with: @stock_item.cost
    fill_in "Location", with: @stock_item.location_id
    fill_in "Name", with: @stock_item.name
    fill_in "Qty", with: @stock_item.qty
    fill_in "Qty type", with: @stock_item.qty_type_id
    fill_in "Reference", with: @stock_item.reference
    fill_in "Total", with: @stock_item.total
    click_on "Create Stock item"

    assert_text "Stock item was successfully created"
    click_on "Back"
  end

  test "should update Stock item" do
    visit stock_item_url(@stock_item)
    click_on "Edit this stock item", match: :first

    fill_in "Company", with: @stock_item.company_id
    fill_in "Cost", with: @stock_item.cost
    fill_in "Location", with: @stock_item.location_id
    fill_in "Name", with: @stock_item.name
    fill_in "Qty", with: @stock_item.qty
    fill_in "Qty type", with: @stock_item.qty_type_id
    fill_in "Reference", with: @stock_item.reference
    fill_in "Total", with: @stock_item.total
    click_on "Update Stock item"

    assert_text "Stock item was successfully updated"
    click_on "Back"
  end

  test "should destroy Stock item" do
    visit stock_item_url(@stock_item)
    click_on "Destroy this stock item", match: :first

    assert_text "Stock item was successfully destroyed"
  end
end
