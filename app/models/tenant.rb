# == Schema Information
#
# Table name: tenants
#
#  id         :uuid             not null, primary key
#  domain     :string
#  name       :string
#  subdomain  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tenant < ApplicationRecord

  after_create :create_tenant

  private
  def create_tenant
    Apartment::Tenant.create(subdomain)
  end
end
