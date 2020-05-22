class Employee < ApplicationRecord
    has_many :shows
    has_many :dogs, through: :shows
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :alias, presence: true
    validates :title, uniqueness: true
    validates :alias, uniqueness: true
end
