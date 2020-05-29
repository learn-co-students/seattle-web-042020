class Student < ApplicationRecord
  belongs_to :cohort, optional: true

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
