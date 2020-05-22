class Employee < ApplicationRecord
  has_many :shows 
  has_many :dogs, through: :shows

  validates :alias, :title, uniqueness: true

  def full_name
    "#{first_name} #{last_name}"
  end
end
