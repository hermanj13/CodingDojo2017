class Dojo < ActiveRecord::Base
  validates :name, :city, presence:true
  validates :state, presence:true, length: { is: 2}
  has_many :ninjas, dependent: :destroy
end
