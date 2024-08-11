
import "./Navbar.css";
import logo from "./../Components/logo.PNG"
function Navbar() {
  return (
    <>
    <div className='navbar'>
     <div className='name'>
        Cake shop <img src={logo.PNG}/>
      </div>
      <div className='links'>
          Home
          About
          Contact
      </div>
    </div>
    </>
  )
}

export default Navbar;