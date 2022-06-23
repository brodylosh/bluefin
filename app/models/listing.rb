class Listing < ApplicationRecord
    belongs_to :buyer
    belongs_to :house
end
