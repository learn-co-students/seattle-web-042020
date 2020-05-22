class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.belongs_to :dog, null: false, foreign_key: true
      t.belongs_to :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
