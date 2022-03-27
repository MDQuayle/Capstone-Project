import NBARepliesForm from "./NBARepliesForm";
import { Card, CardTitle, CardText, Button} from 'reactstrap'
import {replyRemoved, replyUpvote, replyDownvote } from '../ReplySlice'
function NBARepliesCard({user, reply, id}) {
  function handleDeleteClick(){
    fetch(`/replies/${id}`, {
      method: "DELETE",
    });

    replyRemoved(id);
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
        <Button>
          UpVote
        </Button>
        <Button>
          DownVote
        </Button>
        <Button onClick={handleDeleteClick}>
          Delete Reply
        </Button>
      </Card>
        <NBARepliesForm id={id} user={user} />
      </ul>
    </div>
    )
  }
  
  export default NBARepliesCard;