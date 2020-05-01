class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :company
      t.string :address
      t.integer :rating
      t.string :service_type
    end
  end
end
