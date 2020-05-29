class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.integer :cohort_id

      t.timestamps
    end
  end
end
