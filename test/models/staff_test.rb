# == Schema Information
#
# Table name: staffs
#
#  id              :uuid             not null, primary key
#  employment_date :date
#  status          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  campus_id       :uuid
#  person_id       :uuid
#  school_id       :uuid
#  staff_type_id   :uuid
#
# Indexes
#
#  index_staffs_on_campus_id      (campus_id)
#  index_staffs_on_person_id      (person_id)
#  index_staffs_on_school_id      (school_id)
#  index_staffs_on_staff_type_id  (staff_type_id)
#
# Foreign Keys
#
#  fk_rails_...  (campus_id => campuses.id)
#  fk_rails_...  (person_id => people.id)
#  fk_rails_...  (school_id => schools.id)
#  fk_rails_...  (staff_type_id => staff_types.id)
#
require "test_helper"

class StaffTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
