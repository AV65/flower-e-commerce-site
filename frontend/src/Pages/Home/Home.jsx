import LeftColumn from "../../Components/LeftColumn";
import Category from "../../Components/Shop";
import About from "../../Components/About";
import Benefits from "../../Components/Benefits";
import Contact from "../../Components/Contact";
import Service from "../../Components/Service";
import Reviews from "../../Components/Review";
import './Home.css';
const Home = () => {
    return ( 
        <>
        <div className="desktop-flex1">
            <div className="lc">
                <LeftColumn />
            </div>
            <div className="cat">
                <Category />
            </div>
        </div>
        <About />
        <Benefits />
        <Contact />
        <Service />
        <Reviews />
        </>
     );
}
 
export default Home;