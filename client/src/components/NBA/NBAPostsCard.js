import NBARepliesList from './NBARepliesList'
import { Card, CardTitle, CardText, Button} from 'reactstrap'
function NBAPostsCard({post, id, user}) {
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
          <p>{post.username}</p>
          <p>Score: {post.votes}</p>
        </CardText>
        <Button>
          UpVote
        </Button>
        <Button>
          DownVote
        </Button>
      </Card>
        <NBARepliesList id={id} user={user}/>
      </ul>
    </div>
    )
}
  
  export default NBAPostsCard;