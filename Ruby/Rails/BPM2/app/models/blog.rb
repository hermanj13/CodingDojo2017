class Blog < ActiveRecord::Base
  has_many :posts
  has_many :owners
  has_many :comments, as: :commentable
  has_many :users, through: :owners
  validates :name, :description, presence:true
end
