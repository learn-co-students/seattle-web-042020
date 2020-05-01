class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.integer :user_id
      t.integer :service_id
      t.float :cost
      t.float :distance
    end
  end
end
