# == Route Map
#

Rails.application.routes.draw do 
  # mount ExceptionLogger::Engine => '/exception_logger'
  authenticated :user do
    root to: 'home#index', as: :authenticated_root
  end
  root to: redirect('/auth/login')
  devise_scope :user do
    get "/switch", :to => "users/sessions#switch_role"

    # get "/password_expired", :to => 'users/password_expired#show'

  end
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations',
               passwords: 'users/passwords',
               password_expired: 'users/password_expired'
             },
             path: 'auth',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout'
             }
  scope '/admin' do
    resources :roles do
      member do
        get 'switch_role'
        post 'switch_role'
      end
    end
    resources :users do
      collection do
        get 'search'
      end
      member do
        get 'approve'
        get 'disable'
        get 'toggle_lock'

      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :stock_items
  resources :company_types
  resources :companies
  resources :locations
  resources :qty_types
  resources :stock_ins
  resources :stock_outs

end
