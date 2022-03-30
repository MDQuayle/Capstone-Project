import {useState} from 'react'
import { useDispatch } from "react-redux";
import { replyAdded } from './ReplySlice';

function RepliesForm({id,user}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    // username: user.username,
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
              dispatch(replyAdded(reply));
            });
          } else {
          setErrors("Invalid Entry. Please include a title and at least 10 characters for your reply");
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

export default RepliesForm;