Post.destroy_all
Reply.destroy_all
User.destroy_all
puts "🌱 Seeding spices..."
User.create(username: "Admin", password_digest: "example" )
Post.create!(sport: "NBA", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "NBA", title:"Initial Test 2", content: "This is an initial test post again", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"Initial Test", content: "This is an initial test reply", votes: 0, user_id: 1, post_id: 1,username: "Admin")
Reply.create(title:"Initial Test 2", content: "This is an initial test reply again", votes: 0, user_id: 1, post_id: 2,username: "Admin")
Post.create!(sport: "WNBA", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "WNBA", title:"Initial Test 2", content: "This is an initial test post again", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"Initial Test", content: "This is an initial test reply", votes: 0, user_id: 1, post_id: 3,username: "Admin")
Reply.create(title:"Initial Test 2", content: "This is an initial test reply again", votes: 0, user_id: 1, post_id: 4,username: "Admin")
Post.create!(sport: "NFL", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "NFL", title:"Initial Test 2", content: "This is an initial test post again", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"Initial Test", content: "This is an initial test reply", votes: 0, user_id: 1, post_id: 5,username: "Admin")
Reply.create(title:"Initial Test 2", content: "This is an initial test reply again", votes: 0, user_id: 1, post_id: 6,username: "Admin")
Post.create!(sport: "MLB", title:"Initial Test", content: "This is an initial test post", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "MLB", title:"Initial Test 2", content: "This is an initial test post again", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"Initial Test", content: "This is an initial test reply", votes: 0, user_id: 1, post_id: 7,username: "Admin")
Reply.create(title:"Initial Test 2", content: "This is an initial test reply again", votes: 0, user_id: 1, post_id: 8,username: "Admin")
puts "✅ Done seeding!"