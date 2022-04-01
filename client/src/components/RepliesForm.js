import {useState} from 'react'
import { useDispatch } from "react-redux";
import { replyAdded } from './ReplySlice';

function RepliesForm({id,user}) {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")

  const[errors, setErrors] = useState("")
  const dispatch = useDispatch();
  const formData = {
    title: title,
    content: content,
    user_id: id,
    username: user.username,
    votes: 0,
  }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/replies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((response) => {
          if (response.ok) {
            response.json().then((reply) => {
              setErrors([]);
              setTitle("")
              setContent("")
              dispatch(replyAdded(reply));
            });
          } else {
            response.json().then((errorData) => setErrors(errorData.errors))
          }
        });
      }
    
      return (
        <>
        <h6>Reply!</h6>
        <form onSubmit={handleSubmit}>
          
            <label>Reply Title:</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={formData.title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <p>
            <label>Post:</label>
            <input className="content"
              type="text"
              id="content"
              value={formData.content}
              onChange={(e) => setContent(e.target.value)}
              autoComplete="off"
            />
            </p>
            {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
            <input type="submit" value="Reply!" />
          </form>
          </>
      )
}

export default RepliesForm;