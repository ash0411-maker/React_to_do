class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table "posts", force: :cascade do |t|
      t.string "title", null: false
      t.text "content", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
