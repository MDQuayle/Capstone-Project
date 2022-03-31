import {useState} from 'react'
import { useDispatch } from "react-redux";
import { postAdded } from './PostSlice';


function PostsForm({user, sport}) {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const[errors, setErrors] = useState("")
    const dispatch = useDispatch();
    const formData = {
      title: title,
      content: content,
      sport: sport,
      user_id: user.id,
      username: user.username,
      votes: 0,
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/posts', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((response) => {
          if (response.ok) {
            response.json().then((post) => {
              setErrors([]);
              dispatch(postAdded(post));
              setTitle("")
              setContent("")
            });
          } else {
            response.json().then((errorData) => setErrors(errorData.errors))
          }
        });
      }
    
      return (
        <>
        <h5>Create a New Post! What do you have to say?</h5>
        <form onSubmit={handleSubmit}>
          
            <label>Post Title:</label>
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
            <input type="submit" value="Post!" />
          </form>
          </>
      )
}

export default PostsForm;