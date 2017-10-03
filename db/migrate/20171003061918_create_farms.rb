class CreateFarms < ActiveRecord::Migration[5.0]
  def change
    create_table :farms do |t|
      t.string :name
      t.string :state
      t.string :location
      t.string :website

      t.timestamps null: false
    end
  end
end
