# == Schema Information
#
# Table name: assessments
#
#  id                       :uuid             not null, primary key
#  max                      :float
#  status                   :boolean
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  teacher_assignment_id :uuid
#
# Indexes
#
#  index_assessments_on_teacher_assignment_id  (teacher_assignment_id)
#
# Foreign Keys
#
#  fk_rails_...  (teacher_assignment_id => teacher_assignments.id)
#
require "test_helper"

class AssessmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
