
import Navbar from "../../Components/Navbar.js";
import contactImg from "./Contact.png"
import "./contact.css"
import "../../index.js"
function Contact() {
  return (
    <>
    <Navbar/>
    <div className='contact'>
    <div className="headings">
      <span className="heading">Contact</span>
      <img src={contactImg} className='heading-img'/>
      </div>
      </div>
    </>
  )
}

export default Contact