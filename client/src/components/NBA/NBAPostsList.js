import NBAPostsCard from './NBAPostsCard'
import { useSelector } from "react-redux";
import PostsForm from '..PostsForm/';
function NBAPostsList({user}) {
  const sport = "NBA"
  const posts =  useSelector((state) => state.posts)
  console.log(posts)
  const NBA = posts.filter(function(post) {
    if(post.sport === 'NBA')
      return post;
  });
  console.log(NBA)
  const allPosts = NBA.map((post,index) => (
    <NBAPostsCard key={index} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
      <PostsForm user={user} sport={sport}/>
  </div>
  )
}

export default NBAPostsList;