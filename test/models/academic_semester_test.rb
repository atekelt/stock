# == Schema Information
#
# Table name: academic_semesters
#
#  id               :uuid             not null, primary key
#  end_date         :date
#  start_date       :date
#  status           :boolean
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  academic_year_id :uuid
#  semester_id      :uuid
#
# Indexes
#
#  index_academic_semesters_on_academic_year_id  (academic_year_id)
#  index_academic_semesters_on_semester_id       (semester_id)
#
# Foreign Keys
#
#  fk_rails_...  (academic_year_id => academic_years.id)
#  fk_rails_...  (semester_id => semesters.id)
#
require "test_helper"

class AcademicSemesterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
