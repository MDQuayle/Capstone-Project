import NBARepliesForm from "./NBARepliesForm";
function NBARepliesCard({user, reply, id}) {
  return(
    <div>
      <ul>
        <h4>{reply.title}</h4>
        <p>{reply.content}</p>
        <p>{reply.user}</p>
        <p>{reply.votes}</p>
        <NBARepliesForm id={id} user={user} />
      </ul>
    </div>
    )
  }
  
  export default NBARepliesCard;