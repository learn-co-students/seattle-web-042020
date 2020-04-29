class Album
  attr_accessor :title, :artist_id, :id
  #id and name) -> columns
  @@all = [ ]
  def initialize(title, artist_id, id=nil)
    @title = title
    @artist_id = artist_id
    @id = id
    @@all << self
  end

  def self.all
    @@all 
  end 
end