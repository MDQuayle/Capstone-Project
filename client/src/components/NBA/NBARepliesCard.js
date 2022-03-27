import NBARepliesForm from "./NBARepliesForm";
import { Card, CardTitle, CardText, Button} from 'reactstrap'
function NBARepliesCard({user, reply, id}) {
  return(
    <div>
      <ul>
      <Card
        body
        color="dark"
        outline
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
      </Card>
        {/* <h4>{reply.title}</h4>
        <p>{reply.content}</p>
        <p>{reply.user}</p>
        <p>{reply.votes}</p> */}
        <NBARepliesForm id={id} user={user} />
      </ul>
    </div>
    )
  }
  
  export default NBARepliesCard;