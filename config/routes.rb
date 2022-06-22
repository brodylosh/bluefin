Rails.application.routes.draw do
  resources :listings
  resources :agents, only: [:index, :show, :create]
  resources :houses
  resources :buyers, only: [:index, :show, :create]
end
