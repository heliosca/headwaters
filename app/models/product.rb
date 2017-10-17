class Product < ActiveRecord::Base
	belongs_to :farm, optional: true

	def vape?
		product_type == "vape"
	end
end