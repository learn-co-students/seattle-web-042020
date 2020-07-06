class Artist < ApplicationRecord
  has_many :paintings
  has_many :museums, through: :paintings
end
