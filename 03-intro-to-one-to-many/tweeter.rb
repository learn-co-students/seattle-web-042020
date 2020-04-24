require 'pry'

class User

  attr_reader :username

  @@all = [ ]

  def initialize(username)
    @username = username
    # @tweets = [ ] -> we are not storing collections anymore

    @@all << self
  end

  def tweets
    # binding.pry
    Tweet.all.select { |tweet| tweet.user == self } 
    # coffee_dad.tweets => [ <# Tweet >, <# tweets> ]
  end

  def self.all
    @@all
  end

  def post_tweet(message)
    # binding.pry
    tweet = Tweet.new(message, self)
    # @tweets << tweet
  end
  # def tweets
  #   @tweets
  # end
end

class Tweet
  attr_reader :message, :user

  @@all = [ ]

  # the child will always be responsible for storing the parent information
  def initialize(message, user)
    @message = message
    @user = user

    save
  end

  def self.all
    @@all
  end

  private
    def save
      @@all << self
    end
end

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

coffee_dad.post_tweet("Cofffeeeeeee!!!")
coffee_dad.post_tweet("TEa is ok!!!")
coffee_dad.post_tweet("What is life!!!")
tea_uncle.post_tweet("Coffee is ok!!!")
tea_uncle.post_tweet("tea is cool!!!")
tea_uncle.post_tweet("teaaaaaa!!!")

binding.pry
0
