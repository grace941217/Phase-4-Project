class User < ApplicationRecord
    has_many :reviews
    has_many :books, through: :reviews

    has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 4, message: "Your password must have at least four characters"}
end