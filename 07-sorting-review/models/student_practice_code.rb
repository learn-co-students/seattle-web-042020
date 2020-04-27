# require 'pry'
# class Student
#     attr_reader :home_city
#     attr_accessor :name, :spell_count

#     @@all = []
    
#     def initialize(name, home_city, spell_count)
#         @name = name
#         @home_city = home_city
#         @spell_count = spell_count
#         @@all << self

#     end

#     def self.all
#         @@all
#     end
    
#     def self.all_introductions
#         self.all.each do|student|
#             puts "Welcome, this is #{student.name}, from #{student.home_city}"
#         end
#     end
# end