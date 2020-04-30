class Membership
  attr_reader :cost, :lifter, :gym

  @@all = [ ]

  def initialize(cost, gym, lifter)
    @cost = cost
    @gym = gym
    @lifter = lifter
    @@all << self
  end

  def self.all
    @@all 
  end
end