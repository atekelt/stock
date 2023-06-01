require "application_system_test_case"

class AssessmentResultsTest < ApplicationSystemTestCase
  setup do
    @assessment_result = assessment_results(:one)
  end

  test "visiting the index" do
    visit assessment_results_url
    assert_selector "h1", text: "Assessment results"
  end

  test "should create assessment result" do
    visit assessment_results_url
    click_on "New assessment result"

    fill_in "Assessment", with: @assessment_result.assessment_id
    fill_in "Enrollment", with: @assessment_result.enrollment_id
    fill_in "Result", with: @assessment_result.result
    click_on "Create Assessment result"

    assert_text "Assessment result was successfully created"
    click_on "Back"
  end

  test "should update Assessment result" do
    visit assessment_result_url(@assessment_result)
    click_on "Edit this assessment result", match: :first

    fill_in "Assessment", with: @assessment_result.assessment_id
    fill_in "Enrollment", with: @assessment_result.enrollment_id
    fill_in "Result", with: @assessment_result.result
    click_on "Update Assessment result"

    assert_text "Assessment result was successfully updated"
    click_on "Back"
  end

  test "should destroy Assessment result" do
    visit assessment_result_url(@assessment_result)
    click_on "Destroy this assessment result", match: :first

    assert_text "Assessment result was successfully destroyed"
  end
end
