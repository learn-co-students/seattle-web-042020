class CreatePasta < ActiveRecord::Migration
  def change
    create_table :pasta do |t|
      t.string :name
      t.integer :amount
    end  
  end
end
