class Tweet
  @@all = [ ]

  attr_reader :message
  attr_accessor :user

  def initialize(message, user)
      @user = user
      @message = message
      @@all << self
  end

  def self.all
      @@all
  end

  def likes
    Like.all.select { |like| like.tweet == self } 
  end

  def liked_users
    #print out a list of all the tweets that have I've liked.
    # [#<T>, #<T>]
    # binding.pry
    # went through like objects and found the matching users
    likes.map { |like| like.user }
  end
end