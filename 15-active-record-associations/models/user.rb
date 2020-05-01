class User < ActiveRecord::Base
  has_many :rides
  #user(instance).rides
  has_many :services, through: :rides
  #user(instance).services
end