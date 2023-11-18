import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Header from './Header';
import { getBasketToatal } from './Reducer';
import CurrencyFormat from 'react-currency-format';


function Order({ order}) {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div> 
    <Header />
    <div className='order'>
        <h2> Your Orders</h2>
       
        {basket.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hideButton
                   >
            </CheckoutProduct>
            ))}
            <CurrencyFormat
            renderText={(value) => (
                <h3 className='order_total'>Order Total: {value}</h3>
                )}
             decimalScale={2}
            value={getBasketToatal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
     />
       
        
            
    

</div>
    </div>
  )
}

export default Order