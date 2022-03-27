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
        {/* <h4>{post.title}</h4>
        <p>{post.content}</p>
        <p>{post.user}</p>
        <p>{post.votes}</p> */}
        <NBARepliesList id={id} user={user}/>
      </ul>
    </div>
    )
}
  
  export default NBAPostsCard;