class CreateCookies < ActiveRecord::Migration[6.0]
  def change
    create_table :cookies do |t|
      t.string :name
      t.string :img_url

      t.timestamps
    end
  end
end
