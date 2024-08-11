
import Navbar from "../../Components/Navbar.js"
import AboutImg from "./About us page-pana.png"
import "./../../index.js"
import "./about.css"
function About() 
{
  return (
    <>
    <Navbar/>
    <div className='about'>
      <div className="headings">
      <span className='heading'>About</span>
      <img src={AboutImg} className='heading-img'/>
      </div>
    </div>
    </>
    )
}

export default About