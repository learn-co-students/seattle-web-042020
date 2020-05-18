class AddRoomsToHome < ActiveRecord::Migration[6.0]
  def change
    add_column :homes, :rooms, :integer
  end
end
