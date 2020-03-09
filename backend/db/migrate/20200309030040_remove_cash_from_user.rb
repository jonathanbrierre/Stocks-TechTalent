class RemoveCashFromUser < ActiveRecord::Migration[6.0]
  def change

    remove_column :users, :cash, :integer
  end
end
