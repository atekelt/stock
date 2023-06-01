# == Schema Information
#
# Table name: people
#
#  id                :uuid             not null, primary key
#  date_of_birth     :string
#  father_name       :string
#  first_name        :string
#  grand_father_name :string
#  sex               :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  user_id           :uuid
#
# Indexes
#
#  index_people_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class PersonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
