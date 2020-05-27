class User < ApplicationRecord
    has_many :votes

    validates :name, presence: true 
    validates :name, uniqueness: true

    def remaining_votes
        5 - self.votes.count
    end 

    def can_vote
        self.remaining_votes > 0
    end 

    has_secure_password
    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(value)
    # end

    # def authenticate(password)
    #    BCrypt::Password.new(self.password_digest) == password
    # end 
  
end
