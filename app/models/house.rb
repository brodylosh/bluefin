class House < ApplicationRecord
    belongs_to :buyer 
    belongs_to :agent
end
