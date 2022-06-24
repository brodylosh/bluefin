class HouseSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :address, :beds, :baths, :square_feet, :price, :agent_id

  belongs_to :agent
end
