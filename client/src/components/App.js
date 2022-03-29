import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './Header.js';
import LogIn from './LogIn.js';
import Home from './Home';
import { useDispatch } from "react-redux";
import { populate } from './PostSlice';
import NBAPostsList from './NBA/NBAPostsList';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function fetchPosts(){
    fetch('/posts')
    .then(res=> res.json())
    .then(posts => dispatch(populate(posts))
  )}
  fetchPosts()

  function handleLogin(user){
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
    navigate('/home')
  }


  return (
    <div className="App">
      <header className="App-header">
      <Header user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path = "/" element={<LogIn handleLogin={handleLogin}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/NBA" element={<NBAPostsList user={user}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
