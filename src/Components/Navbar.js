
import "./Navbar.css";
import {Link} from "react-router-dom"
import logo from "./logo-removebg-preview.png"
import usericon from "./user-icon.png"
function Navbar() {
  return (
    <>
    <div className='navbar'>
     <div className='name'>
        <img src={logo} className="logo"/>
      </div>
      <div className='links'>
          <Link to="/"className='nav-links'>
          Home
          </Link>
          <Link to="/About"className='nav-links'>
          About
          </Link>
          <Link to="/Contact"className='nav-links'>
          Contact
          </Link>
          <Link to="/Services"className='nav-links'>
          Services
          </Link>
          <Link to="/Signup">
          <img src={usericon} className="user-icon"/>
          </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar;