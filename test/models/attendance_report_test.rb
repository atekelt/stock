# == Schema Information
#
# Table name: attendance_reports
#
#  id               :uuid             not null, primary key
#  absent_count     :integer
#  attendance_dates :jsonb
#  present_count    :integer
#  tardy_count      :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  registration_id  :uuid
#
# Indexes
#
#  index_attendance_reports_on_registration_id  (registration_id)
#
# Foreign Keys
#
#  fk_rails_...  (registration_id => registrations.id)
#
require "test_helper"

class AttendanceReportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
