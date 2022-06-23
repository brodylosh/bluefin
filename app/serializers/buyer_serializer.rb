class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :img_url, :budget, :preapproved, :username, :password
end
