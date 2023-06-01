require "application_system_test_case"

class PenaltiesTest < ApplicationSystemTestCase
  setup do
    @penalty = penalties(:one)
  end

  test "visiting the index" do
    visit penalties_url
    assert_selector "h1", text: "Penalties"
  end

  test "should create penalty" do
    visit penalties_url
    click_on "New penalty"

    fill_in "From day", with: @penalty.from_day
    fill_in "Penalty amount", with: @penalty.penalty_amount
    fill_in "School level", with: @penalty.school_level_id
    fill_in "To day", with: @penalty.to_day
    click_on "Create Penalty"

    assert_text "Penalty was successfully created"
    click_on "Back"
  end

  test "should update Penalty" do
    visit penalty_url(@penalty)
    click_on "Edit this penalty", match: :first

    fill_in "From day", with: @penalty.from_day
    fill_in "Penalty amount", with: @penalty.penalty_amount
    fill_in "School level", with: @penalty.school_level_id
    fill_in "To day", with: @penalty.to_day
    click_on "Update Penalty"

    assert_text "Penalty was successfully updated"
    click_on "Back"
  end

  test "should destroy Penalty" do
    visit penalty_url(@penalty)
    click_on "Destroy this penalty", match: :first

    assert_text "Penalty was successfully destroyed"
  end
end
