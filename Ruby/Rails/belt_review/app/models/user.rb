class User < ActiveRecord::Base
  has_many :events
  has_many :discussions
  has_many :attenders
  has_many :events_attending, through: :attenders, source: :event
  has_many :events_discussed, through: :discussions, source: :event

  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  validates :first, :last, :city, presence: true
  validates :state, presence: true, length: {maximum: 2}
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  before_create validates :password, length: {minimum: 8}

  before_validation :firstcapitalize, :lastcapitalize, :emaillower, :citycapitalize
  private
    def firstcapitalize
      self.first = first.downcase.titleize
    end
    def lastcapitalize
      self.last = last.downcase.titleize
    end
    def emaillower
      self.email = email.downcase
    end
    def citycapitalize
      self.city = city.downcase.titleize
    end
end
