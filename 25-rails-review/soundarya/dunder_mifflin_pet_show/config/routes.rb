Rails.application.routes.draw do
  resources :employees
  resources :dogs
  resources :shows, only: [:new, :create, :index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
