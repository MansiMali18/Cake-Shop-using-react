import Cards from "./../../Components/cards.js"
import React from 'react'
import Navbar from '../../Components/Navbar';
import "./services.css"
function Services() {
  return (
    <div>
      <Navbar />
      <div className="cake-heading" >
        *****&emsp;&emsp;Chocolate Flavour&emsp;&emsp;*****
      </div>
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
      <div className="cake-heading" >
        *****&emsp;&emsp;Strawberry Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v20221107183531/princess-theme-strawberry-cake-eggless-2-kg_1.jpg"
          title="Princess Theme Strawberry Cake Eggless 2 Kg"
          description="Rs.2375"
        />
       <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/pink-strawberry-cream-cake-1-kg-eggless_1.jpg"
          title="Pink Strawberry Cream Cake 1 Kg Eggless"
          description="Rs.1175"
        />
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/in-love-strawberry-cake-1-kg_1.jpg"
          title="In Love Strawberry Cake 1 Kg"
          description="Rs.1475"
        />
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/cream-drop-black-forest-cake-for-mom-1-kg_1.jpg"
          title="Cream Drop Strawberry cake 1 Kg"
          description="Rs.1375"
        />
      </div>
      <div className="cake-heading" >
        *****&emsp;&emsp;Pineapple Flavour&emsp;&emsp;*****
      </div>
      <div className="cards-main-container">
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/pineapple-cake-half-kg-eggless_1.jpg"
          title="Pineapple Cake Half kg Eggless"
          description="Rs.549"
        />
       <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/fruit-overload-cake-half-kg_1.jpg"
          title="Fruit Overload Cake Half Kg"
          description="Rs.725"
        />
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/happy-emoji-pineapple-cake-half-kg_1.jpg"
          title="Happy Emoji Pineapple Cake Half Kg"
          description="Rs.625"
        />
        <Cards
          ImgURL="https://www.fnp.com/images/pr/l/v200/tropical-bliss-pineapple-bento_1.jpg"
          title="Tropical Bliss Pineapple Bento 250 Gram"
          description="Rs.449"
        />
      </div>
    </div>

  )
}

export default Services