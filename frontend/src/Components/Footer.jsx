import './Footer.css';
import Insta from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Pinterest from '../assets/Pinterest.svg';
import Tele from '../assets/Telegram.svg';
const Footer = () => {
  return (
    <>
      <div className="wrap-footer">
        <div className="remember-text">
          <h3>
            Remember to offer beautiful flowers from Kyiv LuxeBouquets — Valentine's Day, Mother's Day, Christmas...
            <br />
            Reminds you 7 days before. No spam or sharing your address.
          </h3>
          <div className="form-block">
            <input type="email" placeholder="Your Email" /><br />
            <button>REMIND</button>
          </div>
        </div>
        <div className="contact">
        <div className="contact-us">
          <h4>Contact Us</h4>
        </div>

        <div className="address">
          <h6>Address:</h6><h5>15/4 Khreshchatyk Street, Kyiv</h5>
        </div>

        <div className="phone">
          <h6>Phone:</h6><h5>+380980099777</h5>

        </div>

        <div className="general">
          <h6>General Enquiry:</h6>
          <h5>Kiev.Florist.Studio@gmail.com</h5>
        </div>

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="social-ic">
            <img src={Insta} alt="instagram icon" /><img src={Pinterest} alt="pinterest icon" /><img src={Facebook} alt="facebook icon" /><img src={Twitter} alt="twitter icon" /><img src={Tele} alt="telegram icon" />
          </div>
        </div>
        </div>
      </div>


      
        <div className="shop-about-flex">
            <div className="wrap-footer2">
            <div className="shop">
                <h4>Shop</h4>
                <ul>
                    <li>All Products</li>
                    <li>Fresh Flowers</li>
                    <li>Dried Flowers</li>
                    <li>Live Plants</li>
                    <li>Designer Vases</li>
                    <li>Aroma Candles</li>
                    <li>Freshener Diffuser</li>
                </ul>
              
                <h4>Service</h4>
                <ul>
                    <li>Flower Subscription</li>
                    <li>Wedding & Event Decor</li>
                </ul>
            </div>
        </div>
        

        <div className="wrap-footer3">
            <div className="about-footer">
                <h4>About Us</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Blog</li>
                </ul>

                <ul>
                    <li>Shopping & returns</li>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>
        </div>


        {/* Desktop View */}

        <div className="footer-desktop">
          <div className="remember-text">
            <h3>
              Remember to offer beautiful flowers from Kyiv LuxeBouquets — Valentine's Day, Mother's Day, Christmas...
              <br />
              Reminds you 7 days before. No spam or sharing your address.
            </h3>
            <div className="form-block">
              <input type="email" placeholder="Your Email" /><br />
              <button>REMIND</button>
            </div>
          </div>

          <div className="contact-footer">
            <h4>Contact Us</h4>
            <h6>Address:</h6><h5>15/4 Khreshchatyk Street, Kyiv</h5>
            <h6>Phone:</h6><h5>+380980099777</h5>
            <h6>General Enquiry:</h6>
            <h5>Kiev.Florist.Studio@gmail.com</h5>
            <h4>Follow Us</h4>
            <div className="social-ic-desk">
              <img src={Insta} alt="instagram icon" /><img src={Pinterest} alt="pinterest icon" /><img src={Facebook} alt="facebook icon" /><img src={Twitter} alt="twitter icon" /><img src={Tele} alt="telegram icon" />
          </div>
          </div>

          <div className="shop">
                <h4>Shop</h4>
                <ul>
                    <li>All Products</li>
                    <li>Fresh Flowers</li>
                    <li>Dried Flowers</li>
                    <li>Live Plants</li>
                    <li>Designer Vases</li>
                    <li>Aroma Candles</li>
                    <li>Freshener Diffuser</li>
                </ul>
              
                <h4>Service</h4>
                <ul>
                    <li>Flower Subscription</li>
                    <li>Wedding & Event Decor</li>
                </ul>
          </div>

          <div className="about-footer">
                <h4>About Us</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Blog</li>
                </ul>

                <ul>
                    <li>Shopping & returns</li>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>

        

    </>
  );
};

export default Footer;
