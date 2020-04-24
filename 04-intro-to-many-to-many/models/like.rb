# made a method for save
class Like
  attr_accessor :user, :tweet
  @@all = [ ]

  def initialize(user, tweet)
      @user = user
      @tweet = tweet

      # @@all << self
      save
  end

  #getter/reader
  def self.all
      @@all
  end

  private
  # this is adding the new instance into the array.
  def save
      # binding.pry
      @@all << self
  end
end
