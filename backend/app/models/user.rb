class User < ApplicationRecord
    has_secure_password
    has_many :stocks 
    has_many :transactions
    validates :email, uniqueness: { case_sensitive: false }
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
end
