import NBAPostsCard from './NBAPostsCard'
import { useSelector } from "react-redux";
function NBAPostsList({user}) {
  const posts =  useSelector((state) => state.posts)
  console.log(posts)
  const allPosts = posts.map((post,index) => (
    <NBAPostsCard key={index} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
  </div>
  )
}

export default NBAPostsList;