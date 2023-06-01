require "test_helper"

class CurriculumSubjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @curriculum_subject = curriculum_subjects(:one)
  end

  test "should get index" do
    get curriculum_subjects_url
    assert_response :success
  end

  test "should get new" do
    get new_curriculum_subject_url
    assert_response :success
  end

  test "should create curriculum_subject" do
    assert_difference("CurriculumSubject.count") do
      post curriculum_subjects_url, params: { curriculum_subject: { curriculum_id: @curriculum_subject.curriculum_id, grade_id: @curriculum_subject.grade_id, subject_id: @curriculum_subject.subject_id } }
    end

    assert_redirected_to curriculum_subject_url(CurriculumSubject.last)
  end

  test "should show curriculum_subject" do
    get curriculum_subject_url(@curriculum_subject)
    assert_response :success
  end

  test "should get edit" do
    get edit_curriculum_subject_url(@curriculum_subject)
    assert_response :success
  end

  test "should update curriculum_subject" do
    patch curriculum_subject_url(@curriculum_subject), params: { curriculum_subject: { curriculum_id: @curriculum_subject.curriculum_id, grade_id: @curriculum_subject.grade_id, subject_id: @curriculum_subject.subject_id } }
    assert_redirected_to curriculum_subject_url(@curriculum_subject)
  end

  test "should destroy curriculum_subject" do
    assert_difference("CurriculumSubject.count", -1) do
      delete curriculum_subject_url(@curriculum_subject)
    end

    assert_redirected_to curriculum_subjects_url
  end
end
