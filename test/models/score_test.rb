# == Schema Information
#
# Table name: scores
#
#  id              :uuid             not null, primary key
#  average         :float
#  conduct         :string
#  rank            :integer
#  total_mark      :float
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  registration_id :uuid
#
# Indexes
#
#  index_scores_on_registration_id  (registration_id)
#
# Foreign Keys
#
#  fk_rails_...  (registration_id => registrations.id)
#
require "test_helper"

class ScoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
