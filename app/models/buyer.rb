class Buyer < ApplicationRecord
    has_many :listings
    has_many :houses, through: :listings 
    has_many :agents, through: :houses
    has_secure_password

    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :username,
          length: { minimum: 1},
          uniqueness: true
        
    validate :password_requirements

    def password_requirements
        rules = {
          " must contain at least one lowercase letter"  => /[a-z]+/,
          " must contain at least one uppercase letter"  => /[A-Z]+/,
          " must contain at least one special character" => /[^A-Za-z0-9]+/,
        }

        if(password == nil) 
          password = ''
        end
      
        rules.each do |message, regex|
          errors.add( :password, message ) unless password.match( regex )
        end
      end
    
end
