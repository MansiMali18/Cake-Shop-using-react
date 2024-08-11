
import Navbar from '../../Components/Navbar';
import HomeImg from "./Home.png"
import cake from "./cake.PNG"
import "./../HOME/home.css"
function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>

        <div class="info-container">
          <div className="info">
            Yummy sweeties delivered to your table !
            <div class="caption">This cake is layered with love, frosted with happiness, and sprinkled with promises of a sweet life together </div>
            <div className='button'>
              <button type="button" className='btn-1'>Learn More</button>
              <button  type="button" className='btn-2'>Order Now</button>
            </div>
          </div>
          <div class="cake-img">
            <img src={cake} className='cake' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home