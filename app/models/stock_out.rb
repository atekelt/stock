class StockOut < ApplicationRecord
  belongs_to :stock_item
  belongs_to :qty_type
  has_paper_trail
end
