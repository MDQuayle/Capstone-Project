class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :sport
      t.string :title
      t.string :content
      t.string :username
      t.integer :votes
      t.integer :user_id

      t.timestamps
    end
  end
end
