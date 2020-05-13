Game.destroy_all
Company.destroy_all
ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'games'")
ActiveRecord::Base.connection.execute("DELETE from sqlite_sequence where name = 'companies'")


Company.create(name: "Nintendo", image_url: "https://cdn02.nintendo-europe.com/media/images/10_share_images/others_3/SI_GenericNintendo.jpg")
Company.create(name: "AcademySoft", image_url: "https://giantbomb1.cbsistatic.com/uploads/scale_small/16/164924/2921188-3792307693-37984.jpg")
Company.create(name: "Taito", image_url: "https://media-exp1.licdn.com/dms/image/C510BAQFQVbwXvEyfKQ/company-logo_200_200/0?e=2159024400&v=beta&t=_wJeWY_y5j1AeXEz2JBvAzsh9f8ficQCbkMUI6ceQGI")
Company.create(name: "Namco", image_url: "https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/2579/1688840-namco.png")


Game.create(
  company: Company.find_by(name: "Nintendo"),
	title: "Mario Kart 8 Deluxe",
  description:
   "Mario Kart 8 Deluxe is a racing game for the Nintendo Switch, and the first Mario game overall for the console. It is a port in the Mario Kart series, being a port of Mario Kart 8 from the Wii U. It has additional features such as several new characters and features more options for Battle Mode.",
  image_url:
	 "https://cdn.vox-cdn.com/thumbor/ZEZjTt0gGaUpBI2VAgslwuMYo9U=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/54824727/mario_kart_8.0.0.jpeg"
)

Game.create(
  company: Company.find_by(name: "Nintendo"),
	title: "Robonauts",
  description:
   "Robonauts is a 2D arcade-like shooting game that was released on 15 September 2017 and 19 September 2017 on the Nintendo Switch and PlayStation 4 respectively. It was developed and published by Qubic Games.",
  image_url:
   "https://i1.wp.com/www.nintendo-insider.com/wp-content/uploads/2017/10/robonauts_review_header.jpg?fit=1280%2C720&ssl=1"
)

Game.create(
  company: Company.find_by(name: "AcademySoft"),
	title: "Space Invaders",
  description:
   "Space Invaders is a 1978 arcade game created by Tomohiro Nishikado. It was manufactured and sold by Taito in Japan, and licensed in the United States by the Midway division of Bally.",
  image_url:
   "https://cdn-images-1.medium.com/max/1200/1*Ya6drllhmC82yh0J-elrPA.jpeg")

Game.create(
  company: Company.find_by(name: "Taito"),
	title: "Tetris",
  description:
   "Tetris is a tile-matching puzzle video game originally designed and programmed by Soviet Russian game designer Alexey Leonidovich Pajitnov. ",
  image_url:
   "https://mobimg.b-cdn.net/androidgame_img/tetris/real/1_tetris.jpg"
   
)

Game.create(
  company: Company.find_by(name: "Namco"),
	title: "Pac Man",
  description:
   "Pac-Man is a maze arcade game developed and released by Namco in 1980. It was originally known as Puckman in Japan before being changed to Pac-Man in international releases, done by Midway Games. ",
  image_url:
	 "https://images-na.ssl-images-amazon.com/images/I/71ipTP6sGFL._SY679_.jpg"
)