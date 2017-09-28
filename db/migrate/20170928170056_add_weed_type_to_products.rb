class AddWeedTypeToProducts < ActiveRecord::Migration[5.0]
  def change
  	add_column :products, :weed_type, :string
  end
end
