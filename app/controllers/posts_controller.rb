class PostsController < ApplicationController
  def index(sport)  
    posts = Post.find_by(sport: sport)
    render json: posts
  end
	
  def nba
		posts = Post.find_by(sport: "NBA")
    render json: posts
	end

  def nfl
		index("NFL")
	end

  def mlb
		index("MLB")
	end

  def wnba
		index("WNBA")
	end

  def mls
		index("MLS")
	end

  def ncaaf
		index("NCAAF")
	end

  def ncaam
		index("NCAAM")
	end

  def ncaaw
		index("NCAAW")
	end

  def nhl
		index("NHL")
	end

	
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