Rails.application.routes.draw do
  resources :posts, do
    resources :replies, only: [:index, :create]
  end
  resources :replies
  get "/nba", to: "posts#nba"
  get "/nfl", to: "posts#nfl"
  get "/mlb", to: "posts#mlb"
  get "/wnba", to: "posts#wnba"
  get "/mls", to: "posts#mls"
  get "/ncaaf", to: "posts#ncaaf"
  get "/ncaam", to: "posts#ncaam"
  get "/ncaaw", to: "posts#ncaaw"
  get "/nhl", to: "posts#nhl"
  post "/signup", to: "users#create" 
  get "/me", to: "users#show" 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
