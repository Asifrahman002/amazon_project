import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketToatal } from './Reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                  <p>
                     Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This Order Contains Gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketToatal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
     />
    <button onClick={e => navigate('/Payment')}> Proceed to Checkout</button>

    
     
    </div>
  
  )
}

export default Subtotal;