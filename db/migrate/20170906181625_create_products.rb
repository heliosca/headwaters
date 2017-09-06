class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
    	t.string :thc
    	t.string :cbd
    	t.string :strain
    	t.string :product_type
        t.text :description
    	t.string :name

    	t.timestamps null: false
    end
  end
end
