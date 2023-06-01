require "application_system_test_case"

class ScoresTest < ApplicationSystemTestCase
  setup do
    @score = scores(:one)
  end

  test "visiting the index" do
    visit scores_url
    assert_selector "h1", text: "Scores"
  end

  test "should create score" do
    visit scores_url
    click_on "New score"

    fill_in "Average", with: @score.average
    fill_in "Conduct", with: @score.conduct
    fill_in "Rank", with: @score.rank
    fill_in "Registration", with: @score.registration_id
    fill_in "Total mark", with: @score.total_mark
    click_on "Create Score"

    assert_text "Score was successfully created"
    click_on "Back"
  end

  test "should update Score" do
    visit score_url(@score)
    click_on "Edit this score", match: :first

    fill_in "Average", with: @score.average
    fill_in "Conduct", with: @score.conduct
    fill_in "Rank", with: @score.rank
    fill_in "Registration", with: @score.registration_id
    fill_in "Total mark", with: @score.total_mark
    click_on "Update Score"

    assert_text "Score was successfully updated"
    click_on "Back"
  end

  test "should destroy Score" do
    visit score_url(@score)
    click_on "Destroy this score", match: :first

    assert_text "Score was successfully destroyed"
  end
end
