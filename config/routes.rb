Rails.application.routes.draw do
  resources posts: do
    resources :replies, only: [:index, :create]
  get "/nba", to: "posts#nba"
  resources reply:
  post "/signup", to: "users#create" 
  get "/me", to: "users#show" 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
