class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :dream_title
      t.string :dream_details

      t.timestamps
    end
  end
end
