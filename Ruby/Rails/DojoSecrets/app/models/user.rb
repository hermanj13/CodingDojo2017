class User < ActiveRecord::Base
  has_many :secrets
  has_many :likes, dependent: :destroy
  has_many :secrets_liked, through: :likes, source: :secret

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  has_secure_password
  validates :name, presence:true
  validates :email, presence: true, uniqueness: { case_sensitive:false }, format: { with:EMAIL_REGEX }
  before_validation :email_lowercase

  protected
    def email_lowercase
      self.email = email.downcase
    end
end
