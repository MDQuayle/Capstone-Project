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
      sport: {sport},
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
          setErrors("Invalid Entry. Please include a title and at least 10 characters for your post");
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
            <input type="submit" value="Post!" />
              <p style={{ color: "red" }}>
                {errors}
              </p>
          </form>
          </>
      )
}

export default PostsForm;