import NBARepliesCard from 'NBARepliesCard'
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
function NBARepliesList({id, user}) {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}/replies`)
    .then(res=> res.json())
    .then(replies => dispatch(populate(replies)))
  },[])
  return(
  <div>
      {allMovies}
  </div>
  )
}
export default NBARepliesList;