require "test_helper"

class GradeLettersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @grade_letter = grade_letters(:one)
  end

  test "should get index" do
    get grade_letters_url
    assert_response :success
  end

  test "should get new" do
    get new_grade_letter_url
    assert_response :success
  end

  test "should create grade_letter" do
    assert_difference("GradeLetter.count") do
      post grade_letters_url, params: { grade_letter: { maximum_grade: @grade_letter.maximum_grade, minimum_grade: @grade_letter.minimum_grade, name: @grade_letter.name } }
    end

    assert_redirected_to grade_letter_url(GradeLetter.last)
  end

  test "should show grade_letter" do
    get grade_letter_url(@grade_letter)
    assert_response :success
  end

  test "should get edit" do
    get edit_grade_letter_url(@grade_letter)
    assert_response :success
  end

  test "should update grade_letter" do
    patch grade_letter_url(@grade_letter), params: { grade_letter: { maximum_grade: @grade_letter.maximum_grade, minimum_grade: @grade_letter.minimum_grade, name: @grade_letter.name } }
    assert_redirected_to grade_letter_url(@grade_letter)
  end

  test "should destroy grade_letter" do
    assert_difference("GradeLetter.count", -1) do
      delete grade_letter_url(@grade_letter)
    end

    assert_redirected_to grade_letters_url
  end
end
