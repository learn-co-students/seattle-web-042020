require_relative '../config/environment'

musical1 = Musical.new("Chicago", "Chicago")
musical2 = Musical.new("Disney's Frozen on Ice", "Magic Land")

hippodrome = Theater.new("Hippodrome", "Chicago")
paramount = Theater.new("Paramount", "Seattle")

p1 = Performance.new("1/6/2020", musical1, hippodrome)
p2 = Performance.new("2/6/2020", musical1, hippodrome)
p3 = Performance.new("3/6/2020", musical1, hippodrome)
p4 = Performance.new("4/6/2020", musical1, hippodrome)
p5 = Performance.new("5/6/2020", musical1, hippodrome)

p6 = Performance.new("8/9/2028", musical2, paramount)
p7 = Performance.new("8/10/2028", musical2, paramount)
p8 = Performance.new("8/11/2028", musical2, paramount)
p9 = Performance.new("8/12/2028", musical2, paramount)
p0 = Performance.new("8/13/2028", musical2, paramount)


binding.pry
0