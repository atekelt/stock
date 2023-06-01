# == Schema Information
#
# Table name: woredas
#
#  id         :uuid             not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  zone_id    :uuid
#
# Indexes
#
#  index_woredas_on_zone_id  (zone_id)
#
# Foreign Keys
#
#  fk_rails_...  (zone_id => zones.id)
#
require "test_helper"

class WoredaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
