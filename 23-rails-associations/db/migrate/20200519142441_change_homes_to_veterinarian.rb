class ChangeHomesToVeterinarian < ActiveRecord::Migration[6.0]
  def change
    rename_table :homes, :veterinarians
  end
end
