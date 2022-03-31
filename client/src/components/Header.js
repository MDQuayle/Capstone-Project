import Navbar from "./Navbar";
import { Button } from "reactstrap"
function Header({onLogout}) {

  return (
    <header>
      <h1>Sporum!</h1>
    <Button onClick={onLogout}>
      Log Out
    </Button>
    <Navbar/>
    
    </header>
  );
}

export default Header;