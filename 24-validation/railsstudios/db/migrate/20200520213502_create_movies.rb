class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.belongs_to :studio, null: false, foreign_key: true
      t.belongs_to :director, null: false, foreign_key: true

      t.timestamps
    end
  end
end
