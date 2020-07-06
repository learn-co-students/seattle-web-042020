class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :slug, :date, :dimensions, :votes
  belongs_to :artist
  belongs_to :museum

  def dimensions
    {
      width: object.width,
      height: object.height
    }
  end

end
