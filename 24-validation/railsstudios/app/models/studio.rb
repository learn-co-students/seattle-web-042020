class Studio < ApplicationRecord
    has_many :movies
    has_many :directors, through: :movies
    validates :name, presence: :true
    validates :location, presence: :true
    validate :date_range 

    def date_range
        if founding_year < 0 || founding_year > 2020
            errors.add(:founding_year, ": Must be a valid year")
        end 
    end 

end
