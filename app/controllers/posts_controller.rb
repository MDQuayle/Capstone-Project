class PostsController < ApplicationController
  def index  
    posts = Post.all
    render json: posts
  end
  # def sport(sport)  
  #   posts = Post.where(sport: sport)
  #   render json: posts
  # end
	
  # def nba
	# 	sport("NBA")
	# end

  # def nfl
	# 	sport("NFL")
	# end

  # def mlb
	# 	sport("MLB")
	# end

  # def wnba
	# 	sport("WNBA")
	# end

  # def mls
	# 	sport("MLS")
	# end

  # def ncaaf
	# 	sport("NCAAF")
	# end

  # def ncaam
	# 	sport("NCAAM")
	# end

  # def ncaaw
	# 	sport("NCAAW")
	# end

  # def nhl
	# 	sport("NHL")
	# end

	
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
    params.permit(:sport, :title, :content,:user_id, :username)
  end
end