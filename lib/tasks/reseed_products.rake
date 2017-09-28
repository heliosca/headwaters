namespace :db do
  desc 'reseed product data'
  task reseed_products: :environment do
    Product.destroy_all
    Rake::Task['db:seed'].invoke
  end
end