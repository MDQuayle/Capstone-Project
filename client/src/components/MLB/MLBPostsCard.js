import RepliesList from '../RepliesList'
import { Card, CardTitle, CardText, Button} from 'reactstrap'
import { useDispatch } from "react-redux";
import {useState} from 'react';
import {postRemoved, postUpvote, postDownvote } from '../PostSlice'
function MLBPostsCard({post, id, user}) {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(post.votes);
  
  function handleDeleteClick(){
    fetch(`/post/${post.id}`, {
      method: "DELETE",
    });

    dispatch(postRemoved(post.id));
  }

  function handleUpvoteClick(){
    fetch(`post/${post.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
       body: JSON.stringify({votes: post.votes +1 }),
      })
    dispatch(postUpvote(post.id))
    setVotes(votes+1)
  }

  function handleDownvoteClick(){
    fetch(`post/${post.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
       body: JSON.stringify({votes: post.votes -1 }),
      })
    dispatch(postDownvote(post.id))
    setVotes(votes-1)
  }
  return(
    <div>
      <ul>
      <Card
        body
        outline
        style={{
          backgroundColor: '#222',
          borderColor: '#000'
        }}
      >
        <CardTitle tag="h5">
          {post.title}
        </CardTitle>
        <CardText>
          <p>{post.content}</p>
          <p> - {post.username}</p>
          <p>Score: {votes}</p>
        </CardText>
        <Button onClick={handleUpvoteClick}>
          UpVote
        </Button>
        <Button onClick={handleDownvoteClick}>
          DownVote
        </Button>
        <Button onClick={handleDeleteClick}>
          Delete Post
        </Button>
      </Card>
        <RepliesList id={post.id} user={user}/>
      </ul>
    </div>
    )
}
  
  export default MLBPostsCard;