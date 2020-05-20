Rails.application.routes.draw do
  resources :cats
  resources :veterinarians, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :appointments, only: [:create]
  #resource(:homes, {only:[:index,:show,:edit]})

  # get "/homes", to: "homes#index"
  # get "/ix", to: homes#ix, as: "ix"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
