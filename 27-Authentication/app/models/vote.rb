class Vote < ApplicationRecord
  belongs_to :cookie
  belongs_to :user
end
