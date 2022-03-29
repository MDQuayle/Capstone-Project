import Navbar from "./Navbar";
import { Button } from "reactstrap"
function Header({onLogout}) {

  return (
    <header>
      <h2>Welcome to Sporum!</h2>
    <Button onClick={onLogout}>
      Log Out
    </Button>
    <Navbar/>
    
    </header>
  );
}

export default Header;