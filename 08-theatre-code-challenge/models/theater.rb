class Theater
    attr_accessor :title, :city

    @@all =[]

    def initialize(title, city)
        @title = title 
        @city = city
        @@all << self
    end

    def self.all 
        @@all
    end
    
    def performances
        Performance.all.select do |performance|
            performance.theater == self
        end
    end

    def musicals
        musicals = performances.map do |performance|
            performance.musical
        end
        musicals.uniq
    end
end