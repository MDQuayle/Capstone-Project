import NBARepliesForm from "./NBARepliesForm";
import { Card, CardTitle, CardText, Button} from 'reactstrap'
function NBARepliesCard({user, reply, id}) {
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
          {reply.content}
          {reply.username}
          {reply.votes}
        </CardText>
        <Button>
          UpVote
        </Button>
        <Button>
          DownVote
        </Button>
        <Button>
          Delete Reply
        </Button>
      </Card>
        <NBARepliesForm id={id} user={user} />
      </ul>
    </div>
    )
  }
  
  export default NBARepliesCard;