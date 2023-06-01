require "test_helper"

class AvailableSectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @available_section = available_sections(:one)
  end

  test "should get index" do
    get available_sections_url
    assert_response :success
  end

  test "should get new" do
    get new_available_section_url
    assert_response :success
  end

  test "should create available_section" do
    assert_difference("AvailableSection.count") do
      post available_sections_url, params: { available_section: { grade_id: @available_section.grade_id, no_of_section: @available_section.no_of_section } }
    end

    assert_redirected_to available_section_url(AvailableSection.last)
  end

  test "should show available_section" do
    get available_section_url(@available_section)
    assert_response :success
  end

  test "should get edit" do
    get edit_available_section_url(@available_section)
    assert_response :success
  end

  test "should update available_section" do
    patch available_section_url(@available_section), params: { available_section: { grade_id: @available_section.grade_id, no_of_section: @available_section.no_of_section } }
    assert_redirected_to available_section_url(@available_section)
  end

  test "should destroy available_section" do
    assert_difference("AvailableSection.count", -1) do
      delete available_section_url(@available_section)
    end

    assert_redirected_to available_sections_url
  end
end
