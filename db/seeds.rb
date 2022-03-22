Post.destroy_all
Reply.destroy_all
puts "🌱 Seeding spices..."
User.create!(username: "Mark", password_digest: "example" )
Post.create!(sport: "NBA", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1)
Post.create!(sport: "NBA", title:"Initial Test 2", content: "This is an initial test post again", votes: 0, user_id: 1)
puts "✅ Done seeding!"