class PostsController < ApplicationController
    
    
      def create
        post = Post.create!(post_params)
        render json: post , status: :created
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
        review = Post.find_by(id: params[:id])
        if post
          post.destroy
          head :no_content
        else
          render json: { error: "Post not found" }, status: :not_found
        end
      end 
    
      private
      def post_params
        params.permit(:sport, :title, :content,:user_id)
      end
end