class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :img_url
      t.string :address
      t.integer :beds
      t.float :baths
      t.integer :square_feet
      t.integer :price
      t.integer :agent_id

      t.timestamps
    end
  end
end
