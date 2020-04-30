class Lifter
  attr_reader :name, :lift_total

  @@all = [ ]

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total
    @@all << self
  end

  def self.all
    @@all
  end

  # Get a list of all the memberships that a specific lifter has
  # Memberships class
  # instance method, will return an array of 
  # Membership objects
  def memberships
    # binding.pry
    Membership.all.select { |membership| membership.lifter == self }
  end

  # Get a list of all the gyms that a specific lifter has memberships to
  # membership class is who i talk to.
  # return an array of gym objects
  def gyms
   binding.pry
   memberships.map { |membership| membership.gym } 
  end

  # Given a gym and a membership cost, sign a specific lifter up for a new gym
  def sign_up(cost, gym)
    Membership.new(cost, gym, self)
  end

  # Get the average lift total of all lifters
  # integer -> average
  # class methods references @@all
  def self.average_lift
    # binding.pry
    @@all.map { |lifter| lifter.lift_total }.sum / @@all.count
  end

  # Get the total cost of a specific lifter's gym memberships  
  # integer -> total cost
  # instance method -> lifter that called this method
  # talk to the membership class
  def gym_cost
    # binding.pry
    memberships.map { |m| m.cost }.sum
  end

end
