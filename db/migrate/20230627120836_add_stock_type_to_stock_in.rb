class AddStockTypeToStockIn < ActiveRecord::Migration[7.0]
  def change
    add_column :stock_ins, :stock_type, :string, default: "Stock In"
  end
end
