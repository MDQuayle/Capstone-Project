import NBAPostsCard from './NBAPostsCard'
import { useSelector } from "react-redux";
function NBAPostsList({user}) {
  const posts =  useSelector((state) => state.post)
  console.log(posts)
  const allPosts = posts.map((post) => (
    <NBAPostsCard key={post.id} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
  </div>
  )
}

export default NBAPostsList;