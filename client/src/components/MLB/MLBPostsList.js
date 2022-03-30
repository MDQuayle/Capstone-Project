import MLBPostsCard from './MLBPostsCard'
import { useSelector } from "react-redux";
import PostsForm from '..PostsForm/';
function MLBPostsList({user}) {
  const sport = "MLB"
  const posts =  useSelector((state) => state.posts)
  const MLB = posts.filter(function(post) {
    if(post.sport === 'MLB')
      return post;
  });
  const allPosts = MLB.map((post,index) => (
    <MLBPostsCard key={index} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
      <PostsForm user={user} sport={sport}/>
  </div>
  )
}

export default MLBPostsList;