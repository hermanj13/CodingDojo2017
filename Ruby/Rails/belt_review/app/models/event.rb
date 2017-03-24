class Event < ActiveRecord::Base
  belongs_to :user
  has_many :attenders, dependent: :destroy
  has_many :discussions, dependent: :destroy

  validates :name, :city, :state, presence: true
  validate :infuture

  before_validation :eventcapitalize, :citycapitalize

  private
    def infuture
      if self.date.present? && self.date < Date.today
        errors.add(:date, "can't be in the past")
      end
    end
    def eventcapitalize
      self.name = name.downcase.titleize
    end
    def citycapitalize
      self.city = city.downcase.titleize
    end
end
