class ReplySerializer < ActiveModel::Serializer
    attributes :id, :title, :content, :votes
    belongs_to :post
  end