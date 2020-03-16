class User < ApplicationRecord
    has_secure_password
    has_many :stocks 
    has_many :transactions
    validates :email, uniqueness: { case_sensitive: false }
end
