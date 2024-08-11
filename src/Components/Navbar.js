
import "./Navbar.css";
import logo from "./logo-removebg-preview.png"
function Navbar() {
  return (
    <>
    <div className='navbar'>
     <div className='name'>
        <img src={logo} className="logo"/>
      </div>
      <div className='links'>
          <a href="/"className='nav-links'>Home</a>
          <a href="/About"className='nav-links'>About</a>
          <a href="/Contact"className='nav-links'>Contact</a>
          <a href="/Services"className='nav-links'>Services</a>
      </div>
    </div>
    </>
  )
}

export default Navbar;