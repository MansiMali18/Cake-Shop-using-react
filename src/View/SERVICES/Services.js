import Cards from "./../../Components/cards.js"
import React from 'react'
import Navbar from '../../Components/Navbar';
import "./services.css"
 
import { theme,product , product2 , product3 , product4 } from './../../config/data.js'

function Services() {
  return (
    <div>
      <Navbar />
      <div className="cake-heading" style={{color:theme.backgroundColor}}>
        *****&emsp;&emsp;Chocolate Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
        {product.map((cakeitem)=>{
        return <Cards
          ImgURL={cakeitem.ImgURL}
          title={cakeitem.title}
          description={cakeitem.description}
        />
        })}
      </div>
      <div className="cake-heading" >
        *****&emsp;&emsp;Strawberry Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
      {product2.map((cakeitem)=>{
        return <Cards
          ImgURL={cakeitem.ImgURL}
          title={cakeitem.title}
          description={cakeitem.description}
        />
        })}
      </div>
      <div className="cake-heading" >
        *****&emsp;&emsp;Pineapple Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
      {product3.map((cakeitem)=>{
        return <Cards
          ImgURL={cakeitem.ImgURL}
          title={cakeitem.title}
          description={cakeitem.description}
        />
        })}
      </div>
      <div className="cake-heading" >
        *****&emsp;&emsp;Black Forest Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
         {product4.map((cakeitem)=>{
        return <Cards
          ImgURL={cakeitem.ImgURL}
          title={cakeitem.title}
          description={cakeitem.description}
        />
        })}
        </div>
    </div>

  )
}

export default Services