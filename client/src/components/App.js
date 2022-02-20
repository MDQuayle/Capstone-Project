import '../App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './Header.js';

function App() {


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

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
      
        </Routes>
      </header>
    </div>
  );
}

export default App;
