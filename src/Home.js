import React from 'react'
import "./Home.css";
import images from "./Assest/prime.jpeg";
import Product from "./Product";
import Book from "./Assest/kalki.jpg";
import Phone from "./Assest/Ultra.jpg";
import Tv from "./Assest/Tv.jpg";
import Watch from "./Assest/Watch.jpg";
import Microwave from "./Assest/Micro Oven.jpg";
import Cloths from "./Assest/Saree.jpg";
import Header from "./Header";


function Home() {
  return (
    <div>
      <Header />
      
    <div className="home">

        <div className="home_container">
        <img 
            className="home_image"
            src={images}></img>

      <div className="home_row">
        <Product
          id="1233456"
          title="Kalki Triology Pack"
          price={750}
          image={Book}
          rating={4} 
        />
        <Product
           id="712456"
           title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
           price={108000}
           image={Phone}
           rating={5}
        />
        </div>

      <div className="home_row">
        <Product 
          id="915018"
          title="Apple Watch Ultra 2 Smartwatch with Rugged Titan"
          price={80000}
          image={Watch}
          rating={2}
        /> 
        <Product
          id="456987"
          title="LG 32 L Charcoal Convection Microwave Oven"
          price={32000}
          image={Microwave}
          rating={2}
        /> 

        <Product 
          id="789124"
          title="Indya Womens Saree"
          price={1500}
          image={Cloths}
          rating={2}
        /> 
        </div>
              
      <div className="home_row">
        <Product
          id="172233"
          title="Samsung 163 cm (65 inches) 4K Ultra HD Smart NEO QLED TV QA55QN85BAKLXL (Bright Silver)"
          price={105000}
          image={Tv}
          rating={5}
          
        />
         </div>
       </div>
   </div>
</div>
        
  )
}

export default Home;