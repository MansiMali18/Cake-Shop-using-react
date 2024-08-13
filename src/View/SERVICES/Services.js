import Cards from "./../../Components/cards.js"
import React from 'react'
import Navbar from '../../Components/Navbar';
import "./services.css"
function Services() {
  return (
    <div>
        <Navbar/>
        <div className="cards-main-container">
        <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v20221221172007/decorated-chocolate-truffle-cake-half-kg_1.jpg"
        title="Decorated Chocolate Truffle Cake Half Kg"
        description="Rs. 575"
        />
        <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v20221214202641/chocolate-truffle-cream-cake-half-kg_1.jpg"
        title="Chocolate Truffle Delicious Cake Half Kg"
        description="Rs. 599"
        />
        <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v20221205202945/fudge-brownie-cake-half-kg_1.jpg"
        title="Fudge Brownie Cake Half kg"
        description="Rs. 675"
        />
         <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v200/chocolate-cream-cake-half-kg_1.jpg"
        title="Fudge Brownie Cake Half kg"
        description="Rs. 675"
        />
         <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v20221205202945/fudge-brownie-cake-half-kg_1.jpg"
        title="Chocolate Cream Cake Half kg"
        description="Rs. 599"
        />
         <Cards 
        ImgURL="https://www.fnp.com/images/pr/l/v20221214202651/chocolate-walnut-truffle-half-kg_1.jpg"
        title="Chocolate Walnut Truffle Cake- Half kg"
        description="Rs.755"
        />
        </div>
    </div>
  )
}

export default Services