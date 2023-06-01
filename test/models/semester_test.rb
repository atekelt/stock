# == Schema Information
#
# Table name: semesters
#
#  id         :uuid             not null, primary key
#  name       :string
#  sequence   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class SemesterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
