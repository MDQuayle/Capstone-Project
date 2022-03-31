function Home() {

    return (
        <div>
            <h2>Thank you for choosing Sporum! Please log in to post!</h2>
            <h1>
        Welcome To Sporum!
      </h1>
      {user ? (
        <div>
          <p>Welcome {user.username}!</p>
        </div>
      ) : (
          <div>
            <p>Please login to start the conversation!</p>
            </div>
      )}
        </div>
    );
  }
  
  export default Home;