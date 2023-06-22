class CreateStockItems < ActiveRecord::Migration[7.0]
  def change
    create_table :stock_items, id: :uuid do |t|
      t.string :name
      t.belongs_to :location, foreign_key: true, type: :uuid
      t.text :reference
      t.belongs_to :company, foreign_key: true, type: :uuid
      t.float :qty
      t.belongs_to :qty_type, foreign_key: true, type: :uuid
      t.float :cost
      t.float :total

      t.timestamps
    end
  end
end
