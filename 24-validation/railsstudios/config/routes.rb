Rails.application.routes.draw do
  resources :movies, only: [:index,:show, :new, :create]
  resources :directors
  resources :studios
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
