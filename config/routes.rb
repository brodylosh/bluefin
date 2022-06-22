Rails.application.routes.draw do
  resources :listings
  resources :agents, only: [:index, :show, :create]
  resources :houses
  resources :buyers, only: [:index, :show, :create]

  post "/Login", to: "sessions#create"
  delete "/logout" to: "sessions#destroy"
end
