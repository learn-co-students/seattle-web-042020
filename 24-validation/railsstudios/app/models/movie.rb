class Movie < ApplicationRecord
  belongs_to :studio
  belongs_to :director
  validates :name, presence: true

end
