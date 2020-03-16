class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.integer :quantity
      t.string :symbol
      t.string :companyName
      t.float :latestPrice
      t.float :open
      t.float :close
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
