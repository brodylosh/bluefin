class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.integer :buyer_id
      t.integer :house_id

      t.timestamps
    end
  end
end
