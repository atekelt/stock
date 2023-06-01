# == Schema Information
#
# Table name: students
#
#  id               :uuid             not null, primary key
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  academic_year_id :uuid
#  campus_id        :uuid
#  person_id        :uuid
#  school_id        :uuid
#
# Indexes
#
#  index_students_on_academic_year_id  (academic_year_id)
#  index_students_on_campus_id         (campus_id)
#  index_students_on_person_id         (person_id)
#  index_students_on_school_id         (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (academic_year_id => academic_years.id)
#  fk_rails_...  (campus_id => campuses.id)
#  fk_rails_...  (person_id => people.id)
#  fk_rails_...  (school_id => schools.id)
#
require "test_helper"

class StudentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
