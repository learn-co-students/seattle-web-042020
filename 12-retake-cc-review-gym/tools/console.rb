# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here
golds = Gym.new("Golds")
la = Gym.new("LA")
twenty_hour_fitness = Gym.new(" 24 hour fitness")

soundarya = Lifter.new("Soundarya", 20)
erin = Lifter.new("Erin", 100)
jenni = Lifter.new("Jenni", 100)
matthew = Lifter.new("Matthew", 100)

soundarya.sign_up(100, golds)
soundarya.sign_up(100, la)
erin.sign_up(100, golds)
erin.sign_up(100, la)

Membership.new(100, golds, soundarya)
binding.pry

puts "Gains!"
