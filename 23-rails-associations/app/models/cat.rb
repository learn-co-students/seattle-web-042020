class Cat < ApplicationRecord
    has_many :appointments
    has_many :veterinarians, through: :appointments
   
end
