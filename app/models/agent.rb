class Agent < ApplicationRecord
    has_many :houses
    has_many :listings, through: :houses
    has_many :buyers, through: :houses

    validates :license_number, presence: true
end
