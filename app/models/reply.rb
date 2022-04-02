class Reply < ApplicationRecord
  belongs_to :post
  belongs_to :user
  validates :title, presence: true
  validates :content, presence: true
end
