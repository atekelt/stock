class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies, id: :uuid do |t|
      t.string :name
      t.belongs_to :company_type, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
