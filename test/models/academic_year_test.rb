# == Schema Information
#
# Table name: academic_years
#
#  id         :uuid             not null, primary key
#  end_date   :date
#  name       :string
#  start_date :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class AcademicYearTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
