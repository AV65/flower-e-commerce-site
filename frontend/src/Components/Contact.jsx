import './Contact.css';
import RightColumn from '../assets/right col.webp';
import Phone from '../assets/phone icon.svg';
import Location from '../assets/locationic.svg';
import Insta from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Pinterest from '../assets/Pinterest.svg';
import Tele from '../assets/Telegram.svg';

const Contact = () => {
    return ( 
        <>
        <div className="contact-main-div">
            <div className="kyiv">
                <div className="kyiv-pic"><img src={RightColumn} alt="Kyiv Pic" /></div>
                <div className="kyiv-follow">
                    <h3>Follow us</h3>
                    <div className="follow-ic">
                        <img src={Insta} alt="Instagram Icon" /><img src={Pinterest} alt="Pinterest Icon" /><img src={Facebook} alt="Facebook Icon" /><img src={Twitter} alt="Twitter Icon" /><img src={Tele} alt="Telegram Icon" />
                    </div>
                </div>
            </div>


            <div className="to-contact-us">
                <div className="top-block">
                    <h2>To Contact Us</h2>
                    <label>We will call you back</label>
                    <div className="block-call-div">
                        <input type="text" placeholder='+380 XX XXX XX XX'/>
                        <button>BLOCK A CALL</button>
                    </div>
                </div>
                
                <div className="bottom-block">
                    <div className="phone-div"><h3>Phone</h3></div>
                    <div className="phone-no">
                        <div className="phone-no1"><img src={Phone} alt="Phone Icon" /><h5>+380980099777</h5></div>
                        <div className="phone-no1"><img src={Phone} alt="Phone Icon" /><h5>+380980099111</h5></div>
                    </div>

                    <div className="address-div"><h3>Address</h3></div>
                    <div className="address-loc">
                        <h5>Opening hours: 8 to 11 p.m.</h5>
                        <div className="loc">
                            <img src={Location} alt="Location Icon" /><h6>15/4 Khreshchatyk Street, Kyiv </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;