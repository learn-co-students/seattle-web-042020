class Appointment < ApplicationRecord
    belongs_to :cat
    belongs_to :veterinarian
end
