import WNBAPostsCard from './WNBAPostsCard'
import { useSelector } from "react-redux";
import PostsForm from '../PostsForm';
function WNBAPostsList({user}) {
  const sport = "WNBA"
  const posts =  useSelector((state) => state.posts)
  console.log(posts)
  const WNBA = posts.filter(function(post) {
    if(post.sport === 'WNBA')
      return post;
  });
  const allPosts = WNBA.map((post,index) => (
    <WNBAPostsCard key={index} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
      <PostsForm user={user} sport={sport}/>
  </div>
  )
}

export default WNBAPostsList;