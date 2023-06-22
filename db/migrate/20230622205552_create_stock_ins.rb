class CreateStockIns < ActiveRecord::Migration[7.0]
  def change
    create_table :stock_ins, id: :uuid do |t|
      t.belongs_to :stock_item, foreign_key: true, type: :uuid
      t.float :qty
      t.belongs_to :qty_type, foreign_key: true, type: :uuid
      t.float :cost
      t.float :total

      t.timestamps
    end
  end
end
