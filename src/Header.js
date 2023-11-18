import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  

  return (
    <div className='header'>
      <Link to="/">
        <img 
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link>
      

    <div className="header_search">
      <input className="header_searchInput" type="text" />
      <SearchIcon className="header_searchIcon" />
    </div>
    
    <Link to={!user &&'/Login'} className="header_nav">
      <div  onClick={handleAuthentication}
         className="header_option">
        <span className="header_optionLineOne">Hello {!user ? 'Guest' :
        user.email}</span>
        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        
      </div>
    
      </Link>

       <Link to='/Order'>
      <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
        <span className="header_optionLineTwo">& Orders</span>
      </div>
      </Link>

      <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
      </div>

      <Link to="./Checkout" className="header_optionBasket">
        <ShoppingBagIcon />
        <span className="header_optionLineTwo header_basketCount">
          {basket?.length}
        </span>
        </Link>
        
      
      
    </div>
  
  );
}

export default Header;