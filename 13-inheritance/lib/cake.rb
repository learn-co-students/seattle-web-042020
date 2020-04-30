class Cake < Food
  attr_reader :slices, :name
  def initialize(name)
    @slices = 5
    super
  end

 def eat
  if @slices > 0
    @slices -= 1
  else
    super
  end
 end
end