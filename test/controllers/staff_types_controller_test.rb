require "test_helper"

class StaffTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @staff_type = staff_types(:one)
  end

  test "should get index" do
    get staff_types_url
    assert_response :success
  end

  test "should get new" do
    get new_staff_type_url
    assert_response :success
  end

  test "should create staff_type" do
    assert_difference("StaffType.count") do
      post staff_types_url, params: { staff_type: { name: @staff_type.name } }
    end

    assert_redirected_to staff_type_url(StaffType.last)
  end

  test "should show staff_type" do
    get staff_type_url(@staff_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_staff_type_url(@staff_type)
    assert_response :success
  end

  test "should update staff_type" do
    patch staff_type_url(@staff_type), params: { staff_type: { name: @staff_type.name } }
    assert_redirected_to staff_type_url(@staff_type)
  end

  test "should destroy staff_type" do
    assert_difference("StaffType.count", -1) do
      delete staff_type_url(@staff_type)
    end

    assert_redirected_to staff_types_url
  end
end
