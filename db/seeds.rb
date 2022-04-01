Post.destroy_all
Reply.destroy_all
User.destroy_all
puts "🌱 Seeding spices..."
User.create(username: "Admin", password_digest: "example" )
Post.create!(sport: "NBA", title:"First NBA Post", content: "This is a test", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "NBA", title:"A Second NBA Post", content: "This is a second test", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"replying in NBA", content: "Testing example testing", votes: 0, user_id: 1, post_id: 1,username: "Admin")
Reply.create(title:"Yelling about Basketball", content: "Differentiating between replies", votes: 0, user_id: 1, post_id: 2,username: "Admin")
Post.create!(sport: "WNBA", title:"WNBA Post", content: "Wow women's basketball!", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "WNBA", title:"Making WNBA Post", content: "A'ja Wilson cannot be stopped", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"I'm making a reply", content: "I don't know man", votes: 0, user_id: 1, post_id: 3,username: "Admin")
Reply.create(title:"Reply 2", content: "Got to keep these different", votes: 0, user_id: 1, post_id: 4,username: "Admin")
Post.create!(sport: "NFL", title:"Wow Tom Brady", content: "Tom Brady retired!", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "NFL", title:"Wow Bruce Arians", content: "Bruce Arians retired!?", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"lol", content: "TNo he did not", votes: 0, user_id: 1, post_id: 5,username: "Admin")
Reply.create(title:"He is old", content: "He also is very red", votes: 0, user_id: 1, post_id: 6,username: "Admin")
Post.create!(sport: "MLB", title:"Home run", content: "Ball go far", votes: 0, user_id: 1, username: "Admin")
Post.create(sport: "MLB", title:"He steal the base", content: "Wow. Quite Sneaky", votes: 0, user_id: 1, username: "Admin")
Reply.create(title:"I love Home run", content: "I want the ball to land in the lake!", votes: 0, user_id: 1, post_id: 7,username: "Admin")
Reply.create(title:"That was crazy!", content: "He is so fast", votes: 0, user_id: 1, post_id: 8,username: "Admin")
puts "✅ Done seeding!"