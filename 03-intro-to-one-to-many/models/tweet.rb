class Tweet

    @@all = [ ]
    attr_accessor :message, :user

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all
        @@all
    end
end