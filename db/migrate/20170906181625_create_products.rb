class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
    	t.string :thc
    	t.string :cbd
    	t.string :strain
    	t.string :type
    	t.text :description

    	t.timestamps null: false
    end
  end
end