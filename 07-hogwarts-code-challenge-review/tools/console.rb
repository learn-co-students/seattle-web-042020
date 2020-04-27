require_relative '../config/environment'

ravenclaw = House.new("Ravenclaw",
  "The Grey Lady : Helena Ravenclaw",
   "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind",
  150)
hufflepuff = House.new("Hufflepuff", 
  "The Fat Friar",
   "You might belong in hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true and unafraid of toil",
  150)
gryffindor = House.new("Gryffindor", 
  "Nearly Headless Nick",
   "You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve and chivarly Set Gryffindors apart",
  150)
slytherin = House.new("Slytherin", 
  "The Bloody Baron",
   "Or perhaps in Slytherin You'll make your real friends, Those cunning fold use any means to achieve their ends",
  150)

soundarya = Student.new("Soundarya", "Olympia", 100)
mat = Student.new("Mathew", "Leonardtown, MD", 2)
tisdale = Student.new("Tisdale", "Yukon", 69)
jenni = Student.new("Jenni", "SF", 111)


#Student instance -> passing the house object.
soundarya.get_sorted(hufflepuff)
Sorting.new(mat, gryffindor)



binding.pry
0