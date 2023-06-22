class StockItem < ApplicationRecord
  belongs_to :location
  belongs_to :company
  belongs_to :qty_type
  has_one_attached :image
end
