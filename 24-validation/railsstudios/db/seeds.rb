# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
s1 = Studio.create(name:"Studio Ghibli", location:"Tokyo", founding_year:1985)
s2 = Studio.create(name:"Disney Studios", location:"Burbank, CA", founding_year:1923)
s3 = Studio.create(name:"Universal Pictures", location:"Universal City, CA", founding_year:1912)


d1= Director.create(name:"Hayao Miyazaki")
d2= Director.create(name:"John Alan Lasseter")
d3 = Director.create(name:"Joss Whedon")

Movie.create(name:"My Neighbor Totoro",studio:s1, director:d1)
Movie.create(name:"Ponyo",studio:s2, director:d1)
Movie.create(name:"Spirited Away",studio:s2, director:d1)
Movie.create(name:"Nausicaa of the Valley of the wind",studio:s1, director:d1)

Movie.create(name:"Toy Story",studio:s2, director:d2)
Movie.create(name:"Cars",studio:s2, director:d2)
Movie.create(name:"WALL-E",studio:s2, director:d2)
Movie.create(name:"Monsters, Inc",studio:s2, director:d2)

Movie.create(name:"Avengers",studio:s2, director:d3)
Movie.create(name:"Serenity",studio:s3, director:d3)
Movie.create(name:"Alien Resurrection",studio:s2, director:d3)