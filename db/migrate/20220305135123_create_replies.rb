class CreateReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :replies do |t|
      t.string :title
      t.string :content
      t.string :username
      t.integer :votes
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
  end
end
