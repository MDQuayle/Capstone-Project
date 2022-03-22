import '../App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './Header.js';
import { useDispatch } from "react-redux";
import { addPost } from '../PostSlice';
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
    fetch('/NBA')
    .then(res=> res.json())
    .then(posts => dispatch(addPost(posts))
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
          <Route path="/NBA" element={<NBAPostsList posts={posts} user={user}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
