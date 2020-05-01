#Users table 
10.times do 
  User.create({
    name: Faker::FunnyName.three_word_name,
    address: Faker::Address.full_address,
    rating: 0
  })
end

#.new -> initializes the ruby instance
#.save commits to the DB
#.create -> .new + .save


#Services Table
10.times do 
  Service.create({
     company: Faker::Company.name,
     address: Faker::Address.full_address,
     rating: 10,
     service_type: Faker::Company.profession
  })
end

#Rides Table

20.times do 
  Ride.create({user_id: User.all.sample.id, 
            service_id: Service.all.sample.id,
            cost: rand(100.00..1000.00),
            distance: rand(0.00..30.00)
            }
          )
end