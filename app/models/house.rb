class House < ApplicationRecord
    has_many :listings
    has_many :buyers, through: :listings
    belongs_to :agent
end
