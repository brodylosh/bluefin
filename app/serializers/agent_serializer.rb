class AgentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :img_url, :license_number, :brokerage
end
