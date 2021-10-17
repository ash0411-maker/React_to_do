Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :test, only: %i[index]
      resources :posts
      resources :todos
      delete '/todos/destroy_all', to: 'todos#destroy_all'
    end
  end
end
