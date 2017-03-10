class Message < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  validates :message, presence:true, length: { minimum:15 }
end
