class CreateJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :employees, :dogs, table_name: :shows do |t|
      # t.index [:employee_id, :dog_id]
      # t.index [:dog_id, :employee_id]
    end
  end
end
