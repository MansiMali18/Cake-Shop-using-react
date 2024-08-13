
import Navbar from '../../Components/Navbar';
import {Link} from "react-router-dom"
import HomeImg from "./Home.png"
import cake from "./cake-img.png"
import "./../HOME/home.css"
import choco from "./choco.png"
import straberry from "./shrawberry.png"
import pineapple from "./pinapple.png"
import blackforest from "./blcforest.png"
function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>

        <div class="info-container">
          <div className="info">
            Yummy sweeties delivered to your table !!!!
            <div class="caption">This cake is layered with love, frosted with happiness, and sprinkled with promises of a sweet life together </div>
            <div className='button'>
              <button type="button" className='btn-1'>Learn More</button>
              <button type="button" className='btn-2'>Order Now</button>
            </div>
          </div>
          <div class="cake-img">
         <img src={cake} className='cake' />
          </div>
        </div>
      </div>
      <div className='section-1'>
        <span className="heading">
          !!!!This week special offers!!!!
        </span>
        <h1>🎂Order by flavour🎂</h1>
        <div className='card-container'>
          <div className='card'>
            <h2>Chocolate flavour</h2>
            <img src={choco} className='home-cake' />
            <Link to="/Services"><button className='view-btn'>View more</button></Link>
          </div>
          <div className='card'>
            <h2>Strawberry flavour</h2>
            <img src={straberry} className='home-cake' />
            <Link to="/Services"><button className='view-btn'>View more</button></Link>
          </div>
          <div className='card'>
            <h2>Pineapple flavour</h2>
            <img src={pineapple} className='home-cake' />
            <Link to="/Services"> <button className='view-btn'>View more</button></Link>
          </div>
          <div className='card'>
            <h2>Black forest flavour</h2>
            <img src={blackforest} className='home-cake'/>
            <Link to="/Services"> <button className='view-btn'>View more</button></Link>
          </div>

        </div>
        </div>
      </>
      )
}

      export default Home