import ShoppingBag from '../assets/shoppingbag.svg';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from './Hamburger Menu';
import { useState, useEffect } from 'react';

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <>
      <div className="header">
        <div className="header-icons">
          <div className="header-ic ham">
            <Link className='no-underline' onClick={() => setOpenHamburger(true)}>&#9776;</Link>            
          </div> 
          <div className="header-ic shopbag">
            <Link to="/cart"><img src={ShoppingBag} alt="" /></Link>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Drawer */}
      <HamburgerMenu isOpen={openHamburger} onClose={() => setOpenHamburger(false)} />

      {/* 1440 Nav bar */}
      <div className="header-1440">
        <div className="shop-contact">
          <Link to="/shop" className='no-underline'>
            <div className="shop-1440">
              <p>Shop</p>
            </div>
          </Link>

          <Link to="/contact" className='no-underline'>
            <div className="contact-1440">
              <p>Contact</p>
            </div>
          </Link>
        </div>

        <div className="sign-cart">
          {!isLoggedIn ? (
            <Link to="/signin" className='no-underline'>
              <div className="sign-1440">
                <p>Sign in</p>
              </div>
            </Link>
          ) : (
            <div className="sign-1440" onClick={handleLogout} style={{ cursor: "pointer" }}>
              <p>Sign out</p>
            </div>
          )}

          <Link to="/cart" className='no-underline'>
            <div className="cart-1440">
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
