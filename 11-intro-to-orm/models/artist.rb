class Artist
  attr_accessor :name, :id
  #id and name) -> columns
  # @@all = [ ]
  def initialize(artist)
    # binding.pry
    @name = artist["name"]
    @id = artist["id"]
    # @@all << self
  end

  # READ -> self.all
  # actual data inside of our tables
  # Something that changes the structure:

  #READ -> find_by_name -> SELECT * FROM artists WHERE name = ...
  def self.find_by_name(name)
    artist = CONN.execute("SELECT * FROM artists WHERE name = ?", name)
  end
  
  # READ -> find_by_id -> SELECT * FROM artists WHERE id = ...
  # READ -> 
  # CREATE  : INSERT -> 

  #UPDATE a column value -> UPDATE artists SET name = ... WHERE name = ...

  #SCHEMA
  #CREATE TABLE fans -> changes DB Structure ( Schema )
  #CREATE

  #READ
  # .schema

  #UPDATE -> Schema ( Altering out table )

  #DROP TABLE artists -> delete 
  def self.all
    # @@all 
    artists = CONN.execute("SELECT * FROM artists")
    artists.each do |artist|
      Artist.new(artist)
    end
  end 
end