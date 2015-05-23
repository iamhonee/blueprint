Rails.application.routes.draw do
  resources :home, only: [:index]
  root 'home#index'

  # Create your version
  get 'v1', to: 'home#version_one'
  
end
