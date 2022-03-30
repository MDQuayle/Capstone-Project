import RepliesCard from './RepliesCard'
import RepliesForm from './RepliesForm'
import {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { populate } from './ReplySlice';
function RepliesList({id, user}) {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}/replies`)
    .then(res=> res.json())
    .then(replies => dispatch(populate(replies)))
  },[])

  const replies =  useSelector((state) => state.replies)
  const allReplies = replies.map((reply) => <RepliesCard key = {reply.id} id={reply.id} reply={reply} user={user}/> )
  return(
  <div>
      {allReplies}
      <RepliesForm id={id} user={user}/>
  </div>
  )
}
export default RepliesList;