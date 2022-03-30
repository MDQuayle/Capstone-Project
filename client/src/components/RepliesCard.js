import { Card, CardTitle, CardText, Button} from 'reactstrap'
import { useDispatch } from "react-redux";
import {replyRemoved, replyUpvote, replyDownvote } from './ReplySlice'
function NBARepliesCard({user, reply, id}) {
  const dispatch = useDispatch();
  function handleDeleteClick(){
    fetch(`/replies/${reply.id}`, {
      method: "DELETE",
    });

    dispatch(replyRemoved(reply.id));
  }

  function handleUpvoteClick(){
    fetch(`replies/${reply.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
       body: JSON.stringify({votes: reply.votes +1 }),
      })
    dispatch(replyUpvote(reply.id))
  }

  function handleDownvoteClick(){
    fetch(`replies/${reply.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
       body: JSON.stringify({votes: reply.votes -1 }),
      })
    dispatch(replyDownvote(reply.id))
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
          {reply.title}
        </CardTitle>
        <CardText>
          <p>{reply.content}</p>
          <p>{reply.username}</p>
          <p>Score: {reply.votes}</p>
        </CardText>
        <Button onClick={handleUpvoteClick}>
          UpVote
        </Button>
        <Button onClick={handleDownvoteClick}>
          DownVote
        </Button>
        <Button onClick={handleDeleteClick}>
          Delete Reply
        </Button>
      </Card>
      </ul>
    </div>
    )
  }
  
  export default NBARepliesCard;