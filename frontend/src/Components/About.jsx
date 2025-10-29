import './About.css';
import { useNavigate } from 'react-router-dom';
const About = () => {

    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about");
    }


    return ( 
        <>
        <div className="about">
            <div className="about-text">
                <h1>About us</h1>
            </div>
            <div className="content">
                <h5>OUR STORY</h5>
                <h3>Kyiv LuxeBouquets</h3>
                <p>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                <button onClick={goToAbout}>LEARN MORE</button>
            </div>
        </div>
        </>
        
     );
}
 
export default About;