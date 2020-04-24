class User
    attr_reader :username, :tweets

    @@all = [ ]

    def initialize(username)
        @username = username
        @tweets = [ ]
        @@all << self
        # binding.pry
    end

    def self.all
        @@all
    end

    def post_tweet(message)
        #creates a new tweet
        # Tweet.new()
        # binding.pry
        tweet = Tweet.new(message, self)
        #add it to the user tweets collection
        @tweets << tweet
    end

end