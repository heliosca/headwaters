class ProductsController < ApplicationController
	def index
		@flowers = Product.where(product_type: "flower")
		@vapes = Product.where(product_type: "vape")
	end

	def show
		@product = Product.includes(:farm).find(params[:id])
	end
end
