class AddStockTypeToStockOut < ActiveRecord::Migration[7.0]
  def change
    add_column :stock_outs, :stock_type, :string, default: "Stock Out"
  end
end
