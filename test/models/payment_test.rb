# == Schema Information
#
# Table name: payments
#
#  id                   :uuid             not null, primary key
#  price                :float
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  academic_semester_id :uuid
#  grade_id             :uuid
#  school_id            :uuid
#  student_id           :uuid
#
# Indexes
#
#  index_payments_on_academic_semester_id  (academic_semester_id)
#  index_payments_on_grade_id              (grade_id)
#  index_payments_on_school_id             (school_id)
#  index_payments_on_student_id            (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (academic_semester_id => academic_semesters.id)
#  fk_rails_...  (grade_id => grades.id)
#  fk_rails_...  (school_id => schools.id)
#  fk_rails_...  (student_id => students.id)
#
require "test_helper"

class PaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
