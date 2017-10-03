class AddBenefitsToProducts < ActiveRecord::Migration[5.0]
  def change
  	add_column :products, :benefits, :text
  end
end
