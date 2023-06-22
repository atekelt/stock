require "test_helper"

class QtyTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @qty_type = qty_types(:one)
  end

  test "should get index" do
    get qty_types_url
    assert_response :success
  end

  test "should get new" do
    get new_qty_type_url
    assert_response :success
  end

  test "should create qty_type" do
    assert_difference("QtyType.count") do
      post qty_types_url, params: { qty_type: { name: @qty_type.name } }
    end

    assert_redirected_to qty_type_url(QtyType.last)
  end

  test "should show qty_type" do
    get qty_type_url(@qty_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_qty_type_url(@qty_type)
    assert_response :success
  end

  test "should update qty_type" do
    patch qty_type_url(@qty_type), params: { qty_type: { name: @qty_type.name } }
    assert_redirected_to qty_type_url(@qty_type)
  end

  test "should destroy qty_type" do
    assert_difference("QtyType.count", -1) do
      delete qty_type_url(@qty_type)
    end

    assert_redirected_to qty_types_url
  end
end
