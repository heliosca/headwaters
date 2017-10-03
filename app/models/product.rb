class Product < ActiveRecord::Base
	belongs_to :farm, optional: true
end