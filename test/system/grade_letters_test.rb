require "application_system_test_case"

class GradeLettersTest < ApplicationSystemTestCase
  setup do
    @grade_letter = grade_letters(:one)
  end

  test "visiting the index" do
    visit grade_letters_url
    assert_selector "h1", text: "Grade letters"
  end

  test "should create grade letter" do
    visit grade_letters_url
    click_on "New grade letter"

    fill_in "Maximum grade", with: @grade_letter.maximum_grade
    fill_in "Minimum grade", with: @grade_letter.minimum_grade
    fill_in "Name", with: @grade_letter.name
    click_on "Create Grade letter"

    assert_text "Grade letter was successfully created"
    click_on "Back"
  end

  test "should update Grade letter" do
    visit grade_letter_url(@grade_letter)
    click_on "Edit this grade letter", match: :first

    fill_in "Maximum grade", with: @grade_letter.maximum_grade
    fill_in "Minimum grade", with: @grade_letter.minimum_grade
    fill_in "Name", with: @grade_letter.name
    click_on "Update Grade letter"

    assert_text "Grade letter was successfully updated"
    click_on "Back"
  end

  test "should destroy Grade letter" do
    visit grade_letter_url(@grade_letter)
    click_on "Destroy this grade letter", match: :first

    assert_text "Grade letter was successfully destroyed"
  end
end
