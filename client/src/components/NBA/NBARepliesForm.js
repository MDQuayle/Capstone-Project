import {useState} from 'react'
import { useDispatch } from "react-redux";
import { replyAdded } from '../ReplySlice';

function NBARepliesForm({id,user}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    sport: "NBA",
    user_id: user.id,
    username: user.username,
    post_id: id
  });
    const[errors, setErrors] = useState("")
    const dispatch = useDispatch();

    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/replies`, {
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
              dispatch(replyAdded(reply));
            });
          } else {
          setErrors("Invalid Entry. Please include a title and at least 10 characters for your reply");
          }
        });
      }
    
      return (
        <>
        <h4>What do you have to say?</h4>
        <form onSubmit={handleSubmit}>
          
            <label>Title:</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={formData.title}
              onChange={handleChange}
            />

            <p>
            <label>Post:</label>
            <input className="content"
              type="text"
              id="content"
              value={formData.content}
              onChange={handleChange}
              autoComplete="off"
            />
            </p>
            <input type="submit" value="Reply!" />
              <p style={{ color: "red" }}>
                {errors}
              </p>
          </form>
          </>
      )
}

export default NBARepliesForm;