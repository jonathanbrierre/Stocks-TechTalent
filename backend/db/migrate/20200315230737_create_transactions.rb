class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :bought
      t.integer :quantity
      t.string :symbol
      t.string :companyName
      t.float :latestPrice

      t.timestamps
    end
  end
end
