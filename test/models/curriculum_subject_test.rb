# == Schema Information
#
# Table name: curriculum_subjects
#
#  id            :uuid             not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  curriculum_id :uuid
#  grade_id      :uuid
#  subject_id    :uuid
#
# Indexes
#
#  index_curriculum_subjects_on_curriculum_id  (curriculum_id)
#  index_curriculum_subjects_on_grade_id       (grade_id)
#  index_curriculum_subjects_on_subject_id     (subject_id)
#
# Foreign Keys
#
#  fk_rails_...  (curriculum_id => curriculums.id)
#  fk_rails_...  (grade_id => grades.id)
#  fk_rails_...  (subject_id => subjects.id)
#
require "test_helper"

class CurriculumSubjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
