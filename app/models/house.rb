class House < ApplicationRecord
    has_many :listings 
    belongs_to :agent
end
