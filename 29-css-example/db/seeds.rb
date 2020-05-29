# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cohort.create([
  {
    name: 'Seattle.first',
    start_date: DateTime.new(2019, 01, 28)
  }, {
    name: 'CRUD',
    start_date: DateTime.new(2019, 02, 18)
  }, {
    name: 'Hermin Mervil',
    start_date: DateTime.new(2019, 03, 11)
  },
  {
    name: 'danny_champion_of_the_world',
    start_date: DateTime.new(2019, 04, 22)
  },
  {
    name: 'wormketbal',
    start_date: DateTime.new(2019, 04, 22)
  },
  {
    name: 'turlenecks',
    start_date: DateTime.new(2019, 05, 23)
  },
  {
    name: 'grithub',
    start_date: DateTime.new(2019, 06, 03)
  },
  {
    name: "My dad is the manager of The Sunglass Hut",
    start_date: DateTime.new(2019, 06, 24)
  },
  {
    name: "{we: Success}",
    start_date: DateTime.new(2019, 07, 15)
  },
  {
    name: "Moist Mozzarella",
    start_date: DateTime.new(2019, 12, 9)
  }
])

20.times do
  Student.create(name: Faker::FunnyName.name, email: Faker::Internet.email, cohort_id: [1,2,3].sample)
end
