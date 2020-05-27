Rails.application.routes.draw do
  resources :users
  resources :cookies, only: [:index] do
    resources :votes
  end 
  resources :sessions, only: [:new, :create]

get '/login', to: 'sessions#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
