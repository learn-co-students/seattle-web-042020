class Sorting

  attr_reader :student, :house

  @@all = [ ]

  def initialize(student, house)
    #student object
    @student = student
    #house object
    @house = house

    @@all << self
  end

  def self.all
    @@all 
  end

end