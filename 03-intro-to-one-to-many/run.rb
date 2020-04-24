require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

soundarya = User.new("Soundarya")
cd = User.new("Coffee Dad")
tu = User.new("Tea Uncle")

binding.pry