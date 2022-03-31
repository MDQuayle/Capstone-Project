function Home({user}) {

    return (
        <div>
            <h2>Thank you for choosing Sporum!</h2>
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