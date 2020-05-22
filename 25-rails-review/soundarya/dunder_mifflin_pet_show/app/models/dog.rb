class Dog < ApplicationRecord
  has_many :shows 
  has_many :employees, through: :shows
end
