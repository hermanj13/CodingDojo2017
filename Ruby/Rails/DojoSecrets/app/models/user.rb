class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  has_secure_password
  validates :name, :password, :password_confirmation, presence:true
  validates :email, presence: true, uniqueness: { case_sensitive:false }, format: { with:EMAIL_REGEX }
  before_validation :email_lowercase

  protected
    def email_lowercase
      self.email = email.downcase
    end
end
