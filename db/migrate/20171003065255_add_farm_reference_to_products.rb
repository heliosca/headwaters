class AddFarmReferenceToProducts < ActiveRecord::Migration[5.0]
  def change
  	add_reference :products, :farm
  end
end
