class ProductsController < ApplicationController
	def index
		@flowers = Product.where(product_type: "flower")
		@vapes = Product.where(product_type: "vape")
	end
end
