class PostSerializer < ActiveModel::Serializer
    attributes :id, :sport, :title, :content, :votes
    has_many :relies
  end