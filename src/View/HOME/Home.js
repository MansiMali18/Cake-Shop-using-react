
import Navbar from '../../Components/Navbar';
import HomeImg from "./Home.png"
import "./../HOME/home.css"
import "./../../index.js"
function Home() {
  return (
  <>
    <Navbar/>
    <div className='about'>
      <div className="headings">
      <span className='heading'>Home</span>
      <img src={HomeImg} className='heading-img'/>
      </div>
    </div>
    </>
  )
}

export default Home