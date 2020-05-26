Rails.application.routes.draw do
  resources :cookies, only: [:index]
 
  resources :votes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
