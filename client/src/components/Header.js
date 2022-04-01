import Navbar from "./Navbar";
import { Button } from "reactstrap"
function Header({onLogout, user}) {

  return (
    <header>
      <h1>Sporum!</h1>
    <Button onClick={onLogout}>
      Log Out
    </Button>
    <Navbar user={user}/>
    
    </header>
  );
}

export default Header;