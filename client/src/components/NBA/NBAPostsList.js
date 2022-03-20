import NBAPostsCard from 'NBAPostsCard'
function NBAPostsList({posts, user}) {
  const allPosts = posts.map((post) => <NBAPostsCard key = {post.id} id={post.id} post={post} user={user}/> )
  return(
  <div>
      {allPosts}
  </div>
  )
}

export default NBAPostsList;