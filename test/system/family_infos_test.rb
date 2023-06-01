require "application_system_test_case"

class FamilyInfosTest < ApplicationSystemTestCase
  setup do
    @family_info = family_infos(:one)
  end

  test "visiting the index" do
    visit family_infos_url
    assert_selector "h1", text: "Family infos"
  end

  test "should create family info" do
    visit family_infos_url
    click_on "New family info"

    fill_in "Email", with: @family_info.email
    fill_in "Full name", with: @family_info.full_name
    fill_in "House number", with: @family_info.house_number
    fill_in "Id card number", with: @family_info.id_card_number
    fill_in "Occupation", with: @family_info.occupation
    fill_in "Person", with: @family_info.person_id
    fill_in "Phone", with: @family_info.phone
    fill_in "Relation", with: @family_info.relation
    fill_in "Sub city", with: @family_info.sub_city
    fill_in "Woreda", with: @family_info.woreda
    click_on "Create Family info"

    assert_text "Family info was successfully created"
    click_on "Back"
  end

  test "should update Family info" do
    visit family_info_url(@family_info)
    click_on "Edit this family info", match: :first

    fill_in "Email", with: @family_info.email
    fill_in "Full name", with: @family_info.full_name
    fill_in "House number", with: @family_info.house_number
    fill_in "Id card number", with: @family_info.id_card_number
    fill_in "Occupation", with: @family_info.occupation
    fill_in "Person", with: @family_info.person_id
    fill_in "Phone", with: @family_info.phone
    fill_in "Relation", with: @family_info.relation
    fill_in "Sub city", with: @family_info.sub_city
    fill_in "Woreda", with: @family_info.woreda
    click_on "Update Family info"

    assert_text "Family info was successfully updated"
    click_on "Back"
  end

  test "should destroy Family info" do
    visit family_info_url(@family_info)
    click_on "Destroy this family info", match: :first

    assert_text "Family info was successfully destroyed"
  end
end
