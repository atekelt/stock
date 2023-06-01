# == Schema Information
#
# Table name: campuses
#
#  id         :uuid             not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :uuid
#
# Indexes
#
#  index_campuses_on_school_id  (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (school_id => schools.id)
#
require "test_helper"

class CampusTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
