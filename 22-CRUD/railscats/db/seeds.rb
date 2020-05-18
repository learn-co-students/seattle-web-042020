# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Clears the db
Cat.delete_all
Home.delete_all
City.delete_all
#OR run `rails db:purge db:migrate db:seed` in the terminal 


Cat.create(name:"rose", color:"black and white", age:"7")
seattle = City.create(name:"Seattle")
san_fran = City.create(name:"San Francisco")

Home.create(name:"blue house", city_id:seattle.id, rooms:3)
Home.create(name:"pirate house", city_id:seattle.id, rooms:7)
Home.create(name:"dracula's castle", city_id:san_fran.id, rooms:2)

