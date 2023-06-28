class Company < ApplicationRecord
  belongs_to :company_type
  has_paper_trail
end
