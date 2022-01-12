import React from 'react' //rfce shortcut
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket ,user}]=useStateValue();

    const login=()=>{
            if(user){
                auth.signOut();
            }
    };

    return (
        <>
        <nav className="header">
        <Link to="/">  
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt="logo"
            />
        </Link>
    {/* search box code */}
    <div className="header_search">
    <input type="text" className="header_inputsearchbox"/>
    <SearchIcon className="header_searchicon"/>
    </div>
   
   <div className="header_nav">
       <Link to={!user && "/login"} className="header_link">
       <div className="header_option">
       <span className="header_option_lineOne">hello! {user?.email}</span>
        <span onClick={login} className="header_option_lineTwo">{user ? "Sign Out":"Sign In"}</span>
       </div>
      </Link>

      <Link to="/Returns" className="header_link">
       <div className="header_option">
       <span className="header_option_lineOne">Returns </span>
        <span className="header_option_lineTwo">& Order</span>
       </div>
      </Link>


      <Link to="/Checkout" className="header_link">
       <div className="header_option_basket">
       <ShoppingBasketIcon/>
        <span className="header_option_lineTwo basket_count">{basket?.length}</span>
        

       </div>
      </Link>

     </div>
   

        </nav>
        <div className="header_search_mobile">
    <input type="text" className="header_inputsearchbox"/>
    <SearchIcon className="header_searchicon"/>
    </div>
    </>
    );
}

export default Header
