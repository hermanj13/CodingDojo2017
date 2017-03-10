class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog
  has_many :messages
  has_many :comments, as: :commentable
  validates :title, presence:true, length: { minimum:7 }
  validates :content, presence:true
end
