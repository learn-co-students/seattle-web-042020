class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :cat, null: false, foreign_key: true
      t.belongs_to :veterinarian, null: false, foreign_key: true
    end
  end
end
