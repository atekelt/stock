# == Schema Information
#
# Table name: enrollments
#
#  id                    :uuid             not null, primary key
#  letter_grade          :string
#  total_mark            :float
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  assignment_section_id :uuid
#  registration_id       :uuid
#  section_id            :uuid
#  subject_id            :uuid
#
# Indexes
#
#  index_enrollments_on_assignment_section_id  (assignment_section_id)
#  index_enrollments_on_registration_id        (registration_id)
#  index_enrollments_on_section_id             (section_id)
#  index_enrollments_on_subject_id             (subject_id)
#
# Foreign Keys
#
#  fk_rails_...  (assignment_section_id => assignment_sections.id)
#  fk_rails_...  (registration_id => registrations.id)
#  fk_rails_...  (section_id => sections.id)
#  fk_rails_...  (subject_id => subjects.id)
#
require "test_helper"

class EnrollmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
