import NBAPostsCard from './NBAPostsCard'
import { useSelector } from "react-redux";
import NBAPostsForm from './NBAPostsForm';
function NBAPostsList({user}) {
  const posts =  useSelector((state) => state.posts)
  console.log(posts)
  const NBA = posts.find(function(post) {
    if(post.sport === 'NBA')
      return post;
  });
  console.log(NBA)
  const allPosts = posts.map((post,index) => (
    <NBAPostsCard key={index} id={post.id} post={post} user={user} />
  ))
  return(
  <div>
      {allPosts}
      <NBAPostsForm user={user}/>
  </div>
  )
}

export default NBAPostsList;