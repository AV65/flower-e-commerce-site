import InstagramIc from "../../assets/Link Block.svg";
import PinterestIc from "../../assets/Link Block (1).svg";
import FacebookIc from "../../assets/Link Block (2).svg"
import TwitterIc from "../../assets/Link Block (3).svg"
import TelegramIc from "../../assets/Link Block (4).svg"
import HeroMob from "../../assets/Hero mob.webp";
import HeroTab from "../../assets/Hero tab.webp";
import Mob1 from "../../assets/mob1.webp";
import Mob2 from "../../assets/mob2.webp";
import Mob3 from "../../assets/mob3.webp";
import Tab1 from "../../assets/tab1.webp";
import Tab2 from "../../assets/tab2.webp";
import Tab3 from "../../assets/tab3.webp";
import './AboutUs.css';


const AboutUs = () => {
    return ( 
        <>
        <div className="about-us-main-div">
            <div className="first-flex">
                <div className="our-story">
                    <h2>Our Story</h2>
                    <span>About</span>
                    <h2>Kyiv LuxeBouquets</h2>
                    <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>         
                    <div className="social-media-icons">
                        <img src={InstagramIc} alt="Instagram" /><img src={PinterestIc} alt="Pinterest" /><img src={FacebookIc} alt="Facebook" /><img src={TwitterIc} alt="Twitter" /><img src={TelegramIc} alt="Telegram" />
                    </div>
                </div>
                <div className="first-pic">
                    <img src={HeroMob} alt="Hero" className="hero-mob" /><img src={HeroTab} alt="Hero" className="hero-tab" />
                </div>
            </div>
            <div className="our-founders">
                <h5>OUR STORY</h5>
                <h3>Our Founder's Passion</h3>
                <p>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
            </div>

            <div className="second-flex">
                <div className="mob-tab-1">
                    <img src={Mob1} className="mob-1" /> <img src={Tab1} className="tab-1" />
                </div>
                <div className="sf-text">
                    <h3>Expertly Crafted Bouquets</h3>
                    <p>At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                </div>
            </div>

            <div className="third-flex">
                <div className="mob-tab-2">
                    <img src={Mob2} className="mob-2" /><img src={Tab2} className="tab-2" />
                </div>
                <div className="tf-text">
                    <h3>Bouquets, Gifts & Ambiance</h3>
                    <p>In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
                </div>
            </div>

            <div className="fourth-flex">
                <div className="mob-tab-3">
                    <img src={Mob3} className="mob-3" /><img src={Tab3} className="tab-3" />
                </div> 
                <div className="tf-text">
                    <h3>Making Every Day Special</h3>
                    <p>Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
                </div>    
            </div>

            <div className="discover-div">
                <h2>Discover Our Beautiful Bouquets</h2>
                <p>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
                <button>SHOP NOW</button>
            </div>

        </div>
        
        </>
     );
}
 
export default AboutUs;