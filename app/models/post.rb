class Post < ApplicationRecord
    belongs_to :user
    has_many :replys
    validates :title, presence: true
    validates :content, presence: true

end
