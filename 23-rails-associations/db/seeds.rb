# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Clears the db
Cat.delete_all
Veterinarian.delete_all
City.delete_all
Appointment.delete_all
#OR run `rails db:purge db:migrate db:seed` in the terminal 


Cat.create(name:"rose", color:"black and white", age:"7")
Cat.create(name:"tod", color:"grey", age:"2")
Cat.create(name:"fluffy", color:"orange", age:"10")


seattle = City.create(name:"Seattle")
san_fran = City.create(name:"San Francisco")

Veterinarian.create(name:"Dr.Pirates Animal Pals", city_id:seattle.id, rooms:7)
Veterinarian.create(name:"Dr.dracula's pets care", city_id:san_fran.id, rooms:2)


