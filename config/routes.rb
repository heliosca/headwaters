Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "welcome#index"

  match '/:id' => 'high_voltage/pages#show', as: :static, via: :get #remove '/pages' from url
end
