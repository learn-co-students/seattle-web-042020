class Veterinarian < ApplicationRecord
  belongs_to :city
  has_many :appointments
  has_many :cats, through: :appointments
end
