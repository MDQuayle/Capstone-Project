import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './Header.js';
import LogIn from './LogIn.js';
import { useDispatch } from "react-redux";
import { populate } from './PostSlice';
import NBAPostsList from './NBA/NBAPostsList';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/posts')
    .then(res=> res.json())
    .then(posts => dispatch(populate(posts))
  )},[])

  function handleLogin(user){
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }


  return (
    <div className="App">
      <header className="App-header">
      <Header user={user} onLogout={handleLogout}/>
        <Routes>
          <Route path = "/" element={<LogIn handleLogin={handleLogin}/>}/>
          <Route path="/NBA" element={<NBAPostsList user={user}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
