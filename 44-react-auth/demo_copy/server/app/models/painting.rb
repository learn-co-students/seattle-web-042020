class Painting < ApplicationRecord
  belongs_to :museum
  belongs_to :artist
end
