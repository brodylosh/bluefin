class CreateAgents < ActiveRecord::Migration[7.0]
  def change
    create_table :agents do |t|
      t.string :first_name
      t.string :last_name
      t.string :img_url
      t.integer :license_number
      t.string :brokerage

      t.timestamps
    end
  end
end
