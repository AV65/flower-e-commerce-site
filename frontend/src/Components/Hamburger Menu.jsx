import { Link } from "react-router-dom";
import Insta from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Pinterest from '../assets/Pinterest.svg';
import Tele from '../assets/Telegram.svg';
import Closeic from '../assets/closebtn.svg';
import './Hamburger Menu.css'

const HamburgerMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu-drawer">
      <div className="menu-content">
        <Link className="close-btn" onClick={onClose}>
          <img src={Closeic} alt="close" />
        </Link>

        <ul className="main-links">
          <li><Link to="/signin" onClick={onClose}>Sign in</Link></li>
          <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
          <li><Link to="/about" onClick={onClose}>About us</Link></li>
        </ul>

        <ul className="footer-links">
          <li><Link to="/shipping" onClick={onClose}>Shipping & returns</Link></li>
          <li><Link to="/terms" onClick={onClose}>Terms & conditions</Link></li>
          <li><Link to="/privacy" onClick={onClose}>Privacy policy</Link></li>
        </ul>

        <div className="social-icons">
          <img src={Insta} alt="Instagram" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Tele} alt="Telegram" />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
