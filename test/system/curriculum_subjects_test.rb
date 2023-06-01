require "application_system_test_case"

class CurriculumSubjectsTest < ApplicationSystemTestCase
  setup do
    @curriculum_subject = curriculum_subjects(:one)
  end

  test "visiting the index" do
    visit curriculum_subjects_url
    assert_selector "h1", text: "Curriculum subjects"
  end

  test "should create curriculum subject" do
    visit curriculum_subjects_url
    click_on "New curriculum subject"

    fill_in "Curriculum", with: @curriculum_subject.curriculum_id
    fill_in "Grade", with: @curriculum_subject.grade_id
    fill_in "Subject", with: @curriculum_subject.subject_id
    click_on "Create Curriculum subject"

    assert_text "Curriculum subject was successfully created"
    click_on "Back"
  end

  test "should update Curriculum subject" do
    visit curriculum_subject_url(@curriculum_subject)
    click_on "Edit this curriculum subject", match: :first

    fill_in "Curriculum", with: @curriculum_subject.curriculum_id
    fill_in "Grade", with: @curriculum_subject.grade_id
    fill_in "Subject", with: @curriculum_subject.subject_id
    click_on "Update Curriculum subject"

    assert_text "Curriculum subject was successfully updated"
    click_on "Back"
  end

  test "should destroy Curriculum subject" do
    visit curriculum_subject_url(@curriculum_subject)
    click_on "Destroy this curriculum subject", match: :first

    assert_text "Curriculum subject was successfully destroyed"
  end
end
