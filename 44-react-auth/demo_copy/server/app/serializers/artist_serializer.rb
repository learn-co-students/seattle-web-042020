class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :birthday, :deathday
end
