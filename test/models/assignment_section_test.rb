# == Schema Information
#
# Table name: assignment_sections
#
#  id                       :uuid             not null, primary key
#  status                   :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  teacher_assignment_id :uuid
#  section_id               :uuid
#
# Indexes
#
#  index_assignment_sections_on_teacher_assignment_id  (teacher_assignment_id)
#  index_assignment_sections_on_section_id                (section_id)
#
# Foreign Keys
#
#  fk_rails_...  (teacher_assignment_id => teacher_assignments.id)
#  fk_rails_...  (section_id => sections.id)
#
require "test_helper"

class AssignmentSectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
