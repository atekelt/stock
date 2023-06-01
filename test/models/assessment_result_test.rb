# == Schema Information
#
# Table name: assessment_results
#
#  id            :uuid             not null, primary key
#  result        :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  assessment_id :uuid
#  enrollment_id :uuid
#
# Indexes
#
#  index_assessment_results_on_assessment_id  (assessment_id)
#  index_assessment_results_on_enrollment_id  (enrollment_id)
#
# Foreign Keys
#
#  fk_rails_...  (assessment_id => assessments.id)
#  fk_rails_...  (enrollment_id => enrollments.id)
#
require "test_helper"

class AssessmentResultTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
