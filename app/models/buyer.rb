class Buyer < ApplicationRecord
    has_many :houses
    has_many :agents, through: :houses

    validates :age, numericality: { greater_than_or_equal_to: 18 }
end
