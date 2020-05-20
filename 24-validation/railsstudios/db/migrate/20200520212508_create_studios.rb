class CreateStudios < ActiveRecord::Migration[6.0]
  def change
    create_table :studios do |t|
      t.string :name
      t.integer :founding_year
      t.string :location

      t.timestamps
    end
  end
end
