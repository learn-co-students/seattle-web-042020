class Artist < ActiveRecord::Base
#   attr_accessor :name, :id
#   #id and name) -> columns
#   # @@all = [ ]
#   def initialize(artist, id=nil)
#     # binding.pry
#     @name = artist["name"]
#     @id = artist["id"]
#     # @@all << self
#   end
# #***********************************************************************************************#
# # Move all the data methods here
# # CRUD OPERATION
# def insert(name)
#   CONN.execute("INSERT INTO artits(name) VALUES(?)", name)
# end

# def self.all
#   artists = CONN.execute("SELECT * FROM artists")
#   artists.each do |artist|
#     Artist.new(artist[0])
#   end
# end 

# def self.update_name(id, old_name, new_name)
#   artist = CONN.execute("UPDATE artists SET name = ? WHERE name = old_name AND id = ?", new_name, old_name, id)
#   Artist.new(artist[0])
# end

# def update_name(old_name, new_name)
#   artist = CONN.execute("UPDATE artists SET name = ? WHERE name = old_name AND id = ?", new_name, old_name, id)
#   Artist.new(artist[0])
# end

# def delete
#   artist = CONN.execute("DELETE FROM artists WHERE name = ? && id = ?",name, id)
#   Artist.new(artist[0])
# end

# def self.find_by_name(name)
#   artist = CONN.execute("SELECT * FROM artists WHERE name = ?", name)
#   Artist.new(artist[0])
# end

# def self.find_by_id(id)
#   artist = CONN.execute("SELECT * FROM artists WHERE id = ?", id)
#   # binding.pry
#   Artist.new(artist[0])
# end
# #***********************************************************************************************#
# #MOVE all the schema methods here
# # Label CRUD OPERATION

# def self.create_table(name)
#   CONN.execute("CREATE TABLE artists COLUMN(id INTEGER PRIMARY KEY, name TEXT)")
# end

# def self.delete_column_by_name(name)
#   CONN.execute("DELETE FROM artists WHERE name = ? && id = ?",name, id)
# end

# def self.create_table(name)
#   CONN.execute("CREATE TABLE artists COLUMN(id INTEGER PRIMARY KEY, name TEXT)")
# end

# def self.add_column(column_name, column_type)
#  CONN.execute("ALTER TABLE artists ADD COLUMN ? ?", column_name, column_type)
# end

# def self.add_column(column_name, column_type)
#  CONN.execute("ALTER TABLE artists ADD COLUMN ? ?", column_name, column_type)
# end

# def self.update_name(id, old_name, new_name)
#  CONN.execute("UPDATE artists SET name = ? WHERE name = old_name AND id = ?", new_name, old_name, id)
# end

# def self.delete_table
#  CONN.execute("DROP TABLE artists")
# end


# # Altering a table you are updating or creating
# #***********************************************************************************************#
# # Aggregation Methods Association Methods
# # artists class ( table ) -> need to talk to the albums (table)
# # find the matching artist_id
# # artist : id, name
# # album: id, title, artist_id
# # albums belongs to the artist[album_id: 1, album_id: 2, 3, 4,, 5, 6]
# # 
#   def albums
#     # binding.pry
#     albums = CONN.execute("
#       SELECT * FROM artists 
#       INNER JOIN albums
#       ON artists.id = albums.artist_id"
#     )
#     albums.map { |album| Album.new(album)}
#   end
# #***********************************************************************************************#
end