class Dojo < ActiveRecord::Base
  validates :branch, :street, :city, presence: true
  validates :state, presence: true, length: { maximum: 2}
end
