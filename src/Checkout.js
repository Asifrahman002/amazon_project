import React from 'react'
import Header from './Header';
import "./Checkout.css";
import Cart from './Assest/amazon-cart.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';



function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div>
      <Header />
  
        <div className="checkout">
        <div className="checkout__left">
          <img
          className="checkout__ad"
           src={Cart}></img>
          
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your Shopping Basket </h2>

            {basket.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating} >
            </CheckoutProduct>
            ))}
        </div> 
     </div>
        
        <div className="checkout__right">
          <Subtotal />

          
        </div>
       
        </div>    
    </div>  
  );
}

export default Checkout;