import React, { useEffect } from "react";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link} 
from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Order from "./Order";


function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

 
  return (
    
    <Router>  
     <div className="App">
     
    <Routes>
      <Route path="/" element={ <Home />} ></Route>
      <Route path="/Checkout" element={ <Checkout />} ></Route>
      <Route path="/Login" element={ <Login />} ></Route>
      <Route path="/Payment" element={ <Payment />} ></Route>
      <Route path="/Order" element={ <Order />} ></Route>

      
    </Routes>
  </div>
  
  
</Router>
);
}
export default App;