class AddCashFloatToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :cash, :float
  end
end
