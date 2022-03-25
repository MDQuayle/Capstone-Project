function NBAPostsCard({id, post, user}) {
  return(
    <div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <p>{post.user}</p>
        <p>{post.votes}</p>
    </div>
    )
}
  
  export default NBAPostsCard;