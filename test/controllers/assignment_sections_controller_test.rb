require "test_helper"

class AssignmentSectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @assignment_section = assignment_sections(:one)
  end

  test "should get index" do
    get assignment_sections_url
    assert_response :success
  end

  test "should get new" do
    get new_assignment_section_url
    assert_response :success
  end

  test "should create assignment_section" do
    assert_difference("AssignmentSection.count") do
      post assignment_sections_url, params: { assignment_section: { teacher_assignment_id: @assignment_section.teacher_assignment_id, section_id: @assignment_section.section_id, status: @assignment_section.status } }
    end

    assert_redirected_to assignment_section_url(AssignmentSection.last)
  end

  test "should show assignment_section" do
    get assignment_section_url(@assignment_section)
    assert_response :success
  end

  test "should get edit" do
    get edit_assignment_section_url(@assignment_section)
    assert_response :success
  end

  test "should update assignment_section" do
    patch assignment_section_url(@assignment_section), params: { assignment_section: { teacher_assignment_id: @assignment_section.teacher_assignment_id, section_id: @assignment_section.section_id, status: @assignment_section.status } }
    assert_redirected_to assignment_section_url(@assignment_section)
  end

  test "should destroy assignment_section" do
    assert_difference("AssignmentSection.count", -1) do
      delete assignment_section_url(@assignment_section)
    end

    assert_redirected_to assignment_sections_url
  end
end
