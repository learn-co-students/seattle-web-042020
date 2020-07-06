class CreatePaintings < ActiveRecord::Migration[5.1]
  def change
    create_table :paintings do |t|
      t.belongs_to :museum, foreign_key: true
      t.belongs_to :artist, foreign_key: true
      t.string :date
      t.float :width
      t.float :height
      t.string :title
      t.string :image
      t.integer :votes
      t.string :slug

      t.timestamps
    end
  end
end
