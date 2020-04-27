class House
    attr_reader :name, :ghost, :motto
    attr_accessor :points

    @@all = []
    
    def initialize(name, ghost, motto, points)
        @name = name
        @ghost = ghost
        @motto = motto
        @points = points
        @@all << self
    end

    def self.all
        @@all
    end
end