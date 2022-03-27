class RepliesController < ApplicationController
  def index
    if params[:post_id]
      post = Post.find(params[:post_id])
      replies = post.replies
    else
      replies = Reply.all
    end
    render json: replies, include: :post
  end 

  def create
    review = Reply.create!(reply_params)
    render json: reply , status: :created
  end

  def update
    reply = Reply.find_by(id: params[:id])
    if reply
      reply.update(reply_params)
      render json: reply
    else
      render json: { error: "Reply not found" }, status: :not_found
    end
  end

  def destroy
    reply = Reply.find_by(id: params[:id])
    if reply
      reply.destroy
      head :no_content
    else
      render json: { error: "Reply not found" }, status: :not_found
    end
  end 

  private
  def reply_params
    params.permit(:title, :content, :post_id, :user_id, :username)
  end
    
end