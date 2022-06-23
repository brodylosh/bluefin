Rails.application.routes.draw do
  resources :listings
  resources :agents, only: [:index, :show, :create]
  resources :houses, only: [:index, :show] 
  resources :buyers, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
