import './Service.css';
import ServiceImg from '../assets/image (1).webp';
import ContentImg from '../assets/content.jpg';
import ContentImg2 from '../assets/conten.webp'
import { useNavigate } from 'react-router-dom';
const Service = () => {


    const navigate = useNavigate();

    const goToSubscription = () => {
        navigate("/subscription");
    };

    return ( 
        <>
        <div className="service">
            <div className="serviceh"><h1>Our Service</h1></div>
            <div className="flex-1440">
                <div className="servb">
                    <img src={ServiceImg} alt="Service banner" />
                </div>
                <div className="hp">
                    <h4>service</h4>
                    <h2>Flower Subcriptions</h2>
                    <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                    <div className="hp-btn">
                        <button onClick={goToSubscription}>SUBSCRIBE NOW</button>
                    </div>
            </div>
            </div>
            

            <div className="service-content">
                <img src={ContentImg} alt="content banner" className="mob" />
                <img src={ContentImg2} alt="content banner" className="desk" />
                <div className="wedding-text">
                    <h4>service</h4>
                    <h2>Wedding & Event Decor</h2>
                    <p>Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                    <div className="wedding-btn">
                        <button className='inq-btn'>Inquire Now</button>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Service;