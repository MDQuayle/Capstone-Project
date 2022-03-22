Post.destroy_all
Reply.destroy_all
puts "🌱 Seeding spices..."
Post.create(sport: "NBA", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1)

puts "✅ Done seeding!"