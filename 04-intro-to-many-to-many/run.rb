require 'pry'

require_relative 'models/user.rb'
require_relative 'models/tweet.rb'
require_relative 'models/like.rb'

coffee_dad = User.new("Coffee Dad")
# tea_uncle = User.new("Tea Uncle")
tea_uncle = User.new("Tea Uncle")
sound = User.new("Soundarya")

t1 = Tweet.new("Coffeee is amazing", coffee_dad)
t2 = Tweet.new("Tea is the best", tea_uncle)
t3 = Tweet.new("Life in iminent", tea_uncle)
t4 = Tweet.new("Tea also has caffiene", tea_uncle)
t5 = Tweet.new("Having some coffee", coffee_dad)
t6 = Tweet.new("What is life????", sound)
t7 = Tweet.new("Yay Ruby!!!", sound)
t8 = Tweet.new("Also why Ruby??", sound)
t9 = Tweet.new("Coding is cool", sound)
t10 = Tweet.new("Coffeee is ok", tea_uncle)

l1 = Like.new(coffee_dad, t1)
l2 = Like.new(coffee_dad, t4)
l3 = Like.new(coffee_dad, t5)
l4 = Like.new(coffee_dad, t10)
l5 = Like.new(tea_uncle, t2)
l6 = Like.new(tea_uncle, t3)
l7 = Like.new(tea_uncle, t4)

coffee_dad.tweets_liked

binding.pry
0