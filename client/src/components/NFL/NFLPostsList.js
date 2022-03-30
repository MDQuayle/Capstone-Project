import NFLPostsCard from './NFLPostsCard'
import { useSelector } from "react-redux";
import PostsForm from '..PostsForm/';
function NFLPostsList({user}) {
  const sport = "NFL"
  const posts =  useSelector((state) => state.posts)
  const NFL = posts.filter(function(post) {
    if(post.sport === 'NFL')
      return post;
  });
  const allPosts = NFL.map((post,index) => (
    <NFLPostsCard key={index} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
      <PostsForm user={user} sport={sport}/>
  </div>
  )
}

export default NFLPostsList;