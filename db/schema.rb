# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_21_212657) do
  create_table "agents", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "img_url"
    t.integer "license_number"
    t.string "brokerage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buyers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.string "img_url"
    t.integer "budget"
    t.boolean "preapproved"
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "houses", force: :cascade do |t|
    t.string "img_url"
    t.string "address"
    t.integer "beds"
    t.float "baths"
    t.integer "square_feet"
    t.integer "price"
    t.integer "agent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.integer "buyer_id"
    t.integer "house_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
