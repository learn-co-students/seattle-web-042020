class Food
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def eat
    "Yummy!!"
  end
end