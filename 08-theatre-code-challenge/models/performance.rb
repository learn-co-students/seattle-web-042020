class Performance
    attr_reader :date, :musical, :theater

    @@all = []

    def initialize(date, musical, theater)
        @date = date 
        @musical = musical 
        @theater = theater
        @@all << self
    end

    def self.all 
        @@all
    end

    def hometown_setting?
        self.theater.city == self.musical.setting_city
    end
end