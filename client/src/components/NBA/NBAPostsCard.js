import NBARepliesList from './NBARepliesList'
function NBAPostsCard({post, id}) {
  return(
    <div>
      <ul>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <p>{post.user}</p>
        <p>{post.votes}</p>
        <NBARepliesList id={id}/>
      </ul>
    </div>
    )
}
  
  export default NBAPostsCard;