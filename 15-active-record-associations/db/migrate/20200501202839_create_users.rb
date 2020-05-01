class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table(:users) do |t|
      t.string :name
      t.string :address
      t.integer :rating
    end
  end
end
