Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
  patch '/buy', to: 'users#buy'
  
  get '/stocks', to: 'stocks#stocks'
  
  get '/profile', to: 'users#profile'
  resources :stocks
  resources :transactions
end
