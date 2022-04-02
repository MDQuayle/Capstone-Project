class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index  
    posts = Post.all
    render json: posts
  end
	
  def create
    post = Post.create!(post_params)
    render json: post , status: :created
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post
  end
    
  def update
  	post = Post.find_by(id: params[:id])
    if post
      post.update(post_params)
      render json: post
    else
      render json: { error: "Post not found" }, status: :not_found
    end
  end
    
  def destroy
  	post = Post.find_by(id: params[:id])
    if post
      post.destroy
      head :no_content
    else
      render json: { error: "Post not found" }, status: :not_found
    end
  end 
    
  private
  def post_params
    params.permit(:sport, :title, :votes, :content,:user_id, :username)
  end
end