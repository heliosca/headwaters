namespace :db do
  desc 'run rake db:seed'
  task :reseed_products do
    on roles(:app) do
      within "#{current_path}" do
        with rails_env: "#{fetch(:stage)}" do
          execute :rake, "db:reseed_products"
        end
      end
    end
  end
end