class Buyer < ApplicationRecord
    has_many :listings
    has_many :houses, through: :listings 
    has_many :agents, through: :houses

    validates :age, numericality: { greater_than_or_equal_to: 18 }
end
