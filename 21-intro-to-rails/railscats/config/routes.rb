Rails.application.routes.draw do
  resources :cats
  resources :homes, only: [:index, :show]
  #resource(:home, {only:[:index,:show,:edit]})

  # get "/homes", to: "homes#index"
  # get "/ix", to: homes#ix
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
