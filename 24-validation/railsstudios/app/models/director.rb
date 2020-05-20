class Director < ApplicationRecord
    has_many :movies
    has_many :studios, through: :movies
end
