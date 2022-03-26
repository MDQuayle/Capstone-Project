import NBARepliesCard from './NBARepliesCard'
import {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { populate } from '../ReplySlice';
function NBARepliesList({id, user}) {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}/replies`)
    .then(res=> res.json())
    .then(replies => dispatch(populate(replies)))
  },[])

  const replies =  useSelector((state) => state.replies)
  const allReplies = replies.map((reply) => <NBARepliesCard key = {reply.id} id={reply.id} reply={reply} user={user}/> )
  
  return(
  <div>
      {allReplies}
  </div>
  )
}
export default NBARepliesList;