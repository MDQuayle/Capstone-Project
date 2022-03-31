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
import WNBAPostsList from './WNBA/WNBAPostsList';
import NFLPostsList from './NFL/NFLPostsList';
import MLBPostsList from './MLB/MLBPostsList';

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
    navigate('/')
  }


  return (
    <div className="App">
      <header className="App-header">
      <Header user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path = "/login" element={<LogIn handleLogin={handleLogin}/>}/>
          <Route path="/NBA" element={<NBAPostsList user={user}/>} />
          <Route path="/WNBA" element={<WNBAPostsList user={user}/>} />
          <Route path="/NFL" element={<NFLPostsList user={user}/>} />
          <Route path="/MLB" element={<MLBPostsList user={user}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
