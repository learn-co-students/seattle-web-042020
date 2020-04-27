# require 'pry'
class Student
    attr_reader :home_city
    attr_accessor :name, :spell_count

    @@all = []
    
    def initialize(name, home_city, spell_count)
        @name = name
        @home_city = home_city
        @spell_count = spell_count
        @@all << self
    end

    def self.all
        @@all
    end
    
    def self.all_introductions
        self.all.each do|student|

            puts "Welcome, this is #{student.name}, from #{student.home_city}"
        end
    end

    def get_sorted(house)
        sort = Sorting.new(self, house)
    end
    
    def my_house
        sort = Sorting.all.find do |sort|
                sort.student == self
               end.house
    end

    def sortings 
        sortings = Sorting.all.select do |sort|
            sort.house == self.my_house
        end
    end

    def classmates
        # returns all your classmates that are in the same house
        # what class are you talking to?
        # what is the datatype you are expecting to get back
        # is it an array and instance, an array of instances
        students = sortings.map { |sorting| sorting.student }
    end
end
# binding.pry
# 0