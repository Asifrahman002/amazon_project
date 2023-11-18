import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import Order from './Order';

function Order() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

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
        <div className='orders'>
        <h1>Your Order details</h1>

        <div className='orders_order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
        </div>
        </div>
        
  )
}

export default Order;