import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { Link, Navigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketToatal } from './Reducer';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    const handleSubmit = e => {

    }

    function name() {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .add({
            basket: basket
    
        })
    }

    

    
       
     
  return (
    <div>
        <Header />
    
   <div className='payment'>
    <div className='payment_container'>
        <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} items</Link>
            )
        </h1>
        {/* Payment Section - delivery address*/}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p> 5/231,Mugappair East</p>
                <p>Chennai-37</p>
            </div>

        </div>

         {/* Payment Section - Review the Items*/}
         <div className='payment_section'>
         <div className='payment_title'>
            <h3> Review Items and Delivery</h3>
        </div>
        <div className='payment_items'>
            {basket.map(item => (
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} >
            </CheckoutProduct>
         )
        )}
        </div>
            
        </div>

          {/* Payment Section - Payment Method*/}
          <div className='payment_section'>
          <div className='payment_title'>
            <h3> Payament Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
            <h3>Enter Card details</h3>
            <input type='text'></input>

            <div className='payment_priceConatiner'>
            <CurrencyFormat
            renderText={(value) => (
                <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
            value={getBasketToatal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
     />
        <Link to="/Order">
           <button onClick={()  => {
             name() 
           }} > Buy Now
           </button>
           </Link>

            </div>
            </form>
          </div>
            
        </div>



    </div>



    
   </div>
   </div>
  )
}

export default Payment