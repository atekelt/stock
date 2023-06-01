# == Schema Information
#
# Table name: registrations
#
#  id                   :uuid             not null, primary key
#  status               :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  academic_semester_id :uuid
#  grade_id             :uuid
#  section_id           :uuid
#  student_id           :uuid
#
# Indexes
#
#  index_registrations_on_academic_semester_id  (academic_semester_id)
#  index_registrations_on_grade_id              (grade_id)
#  index_registrations_on_section_id            (section_id)
#  index_registrations_on_student_id            (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (academic_semester_id => academic_semesters.id)
#  fk_rails_...  (grade_id => grades.id)
#  fk_rails_...  (section_id => sections.id)
#  fk_rails_...  (student_id => students.id)
#
require "test_helper"

class RegistrationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
