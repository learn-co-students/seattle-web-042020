# require 'pry'
class Gym
  attr_reader :name

  @@all = [ ]

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def memberships
    # binding.pry
    Membership.all.select do |membership| 
      # binding.pry 
      membership.gym == self 
    end
  end

  # Get a list of all the gyms that a specific lifter has memberships to
  # membership class is who i talk to.
  # return an array of gym objects
  def lifters
  #  binding.pry
   memberships.map { |membership| membership.lifter }.uniq
  end  

  # Get a list of the names of all lifters that have a 
  # membership to that gym
  # I need to talk to the membership class
  # return an array of strings -> name = string
  def lifter_names
    # binding.pry
    lifters.map { |lifter| lifter.name }
  end

  # talks to the membership class ( we can use a helper)
  # return a new array of integers
  def lift_total
    # binding.pry
    lifters.map { |lifter| lifter.lift_total }.sum
  end
end

# binding.pry
# 0
