
import Navbar from "../../Components/Navbar.js"
import "./../../index.js"
import "./about.css"
import AboutImg from "./about-img.PNG"
function About() 
{
  return (
    <>
    <Navbar/>
    <div className='about-container'>
      <div className="about-headings">
          <img src={AboutImg} className="about-heading-img"/>
          *****&emsp;&emsp;The history of our sweets !!!&emsp;&emsp;*****
          <img src={AboutImg} className="about-heading-img"/>
      </div> 
      </div> 
      <div className="section-1">
        <div className="left-img">
        <img src="https://www.fnp.com/images/pr/l/v20220706181812/luxe-love-orchids-bouquet-truffle-cake_1.jpg" className="about-img"/>
        </div>
        <div className="right-info">
          <div className="our-features">
            
          </div>
        </div>
      </div>    
    </>
    )
}

export default About