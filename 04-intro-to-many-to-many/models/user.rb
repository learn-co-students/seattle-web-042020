class User
  attr_reader :username
  @@all = [ ]
  def initialize(username)
      @username = username
      # @tweets = [ ]
      @@all << self
  end

  def self.all
      @@all
  end

  def post_tweet(message)
    # self.username 
    # @username
    # self.username
      tweet = Tweet.new(message, self)
  end

  #return the tweets this user made
  def tweets
      Tweet.all.select { |tweet| tweet.user == self }
  end

  def likes
    Like.all.select { |like| like.user == self } 
  end

  def tweets_liked
    #print out a list of all the tweets that have I've liked.
    # [#<T>, #<T>]
    # binding.pry
    # went through like objects and found the matching users
    likes.map { |like| like.tweet }
  end

  def delete_user(user)
    # delete teh create
    User.all.delete(user)
    # delete teh created
    delete_tweets(user)
    Tweet.all.delete_if{ |tweet| tweet.user == user }
    #delete all my likes
    Like.all.delete_if{ |like| like.user ==  user }
  end
end
