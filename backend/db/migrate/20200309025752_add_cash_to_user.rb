class AddCashToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :cash, :integer
  end
end
