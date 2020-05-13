class AddColumnToGames < ActiveRecord::Migration
  def change
    add_column :games, :company_id, :integer
  end
end
