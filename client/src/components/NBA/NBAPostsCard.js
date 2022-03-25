function NBAPostsCard({post}) {
  return(
    <div>
      <ul>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <p>{post.user}</p>
        <p>{post.votes}</p>
      </ul>
    </div>
    )
}
  
  export default NBAPostsCard;