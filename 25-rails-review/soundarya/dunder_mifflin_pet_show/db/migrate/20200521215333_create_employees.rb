class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :alias
      t.string :title
      t.string :image_url
      t.string :office

      t.timestamps
    end
  end
end
