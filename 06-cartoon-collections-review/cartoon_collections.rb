require 'pry'
def square_array(array)
  # Use an Enumerable to square every element in the passed in array
  # Return a new array of the results
  # binding.pry
  array.map { |n| n**2 }
end

def summon_captain_planet(planeteer_calls)
  # Use an Enumerable to capitalize and add '!' to every element in the passed in array
  # Return a new array of the results
end

def long_planeteer_calls(planeteer_calls)
  # Use an Enumerable to check if any string in the passed in array is greater than 4 characters long
  # Return the boolean result of this check
end

def find_valid_calls(planeteer_calls)
  valid_calls = ["Earth!", "Wind!", "Fire!", "Water!", "Heart!"]
  # Use an Enumerable to check if any elements in the passed in array match the valid calls listed above 
  # Return the first valid call found, or return nil if no valid calls are found
end

class Student
  def initialize(name)
    @name = name
    binding.pry
  end

  def self.print_name
    puts @name
    binding.pry
  end

  def print_hi 
    puts "hi"
    binding.pry
  end
end

s1 = Student.new("Soundarya")

binding.pry
0