require 'pry'

class Dog
	attr_accessor :name
	attr_reader :breed
	# attr_writer :name

	@@all = []

	def initialize(name, breed)
		@name = name
		@breed = breed
		
		@@all << self
	end

	def speak
		puts "hello my name is #{name}"
		# puts "hello my name is #{self.name}"
		# puts "hello my name is #{@name}"
	end

	def self.all
		@@all
	end

	# # Setter or writer (this is an instance method)
	# def name=(dog_name)
	# 	@name = dog_name
	# end

	# # Getter or reader (this is an instance method)
	# def name
	# 	@name
	# end
end

dog = Dog.new("Fido", "Corgi")
dog1 = Dog.new("bob", "Corgi")

# What is self?
# self is what is in front of the dot when you call your method
# dog1.speak -> self inside of an instance method refers to this instance
# Dog.all -> self inside of a class method refers to this (entire) class

binding.pry

# Variables in ruby
# Global variables: $global
# Class variables: @@all
# Instance variables: @name
# Local variables: input

# PascalCase - Class definition
# snake_case - Method definition
# camelCase
