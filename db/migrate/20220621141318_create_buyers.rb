class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :img_url
      t.integer :budget
      t.boolean :preapproved

      t.timestamps
    end
  end
end
