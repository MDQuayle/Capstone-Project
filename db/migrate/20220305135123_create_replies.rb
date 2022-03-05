class CreateReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :replies do |t|
      t.string :title
      t.string :content
      t.integer :user_id

      t.timestamps
    end
  end
end
