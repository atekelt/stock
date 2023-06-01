require "test_helper"

class SchoolLevelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @school_level = school_levels(:one)
  end

  test "should get index" do
    get school_levels_url
    assert_response :success
  end

  test "should get new" do
    get new_school_level_url
    assert_response :success
  end

  test "should create school_level" do
    assert_difference("SchoolLevel.count") do
      post school_levels_url, params: { school_level: { amharic_name: @school_level.amharic_name, description: @school_level.description, name: @school_level.name, school_id: @school_level.school_id } }
    end

    assert_redirected_to school_level_url(SchoolLevel.last)
  end

  test "should show school_level" do
    get school_level_url(@school_level)
    assert_response :success
  end

  test "should get edit" do
    get edit_school_level_url(@school_level)
    assert_response :success
  end

  test "should update school_level" do
    patch school_level_url(@school_level), params: { school_level: { amharic_name: @school_level.amharic_name, description: @school_level.description, name: @school_level.name, school_id: @school_level.school_id } }
    assert_redirected_to school_level_url(@school_level)
  end

  test "should destroy school_level" do
    assert_difference("SchoolLevel.count", -1) do
      delete school_level_url(@school_level)
    end

    assert_redirected_to school_levels_url
  end
end
