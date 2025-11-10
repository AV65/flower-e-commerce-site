// ...existing code...
import './Shop.css';
import Fresh from '../assets/fresh.webp';
import Dried from '../assets/dried.webp';
import Live from '../assets/live plants.webp';
import Aroma from '../assets/aroma.webp';
import Fresheners from '../assets/fresheners.webp'
import { Link } from "react-router-dom";


const Category = () => {
    return ( 
        <>
        <div className="all-flowers">

            <div className="fresh all">
                <Link to="/category/Fresh-flowers" className='no-underline'>
                    <div className="fresh-text">
                        <h3>Fresh Flowers</h3>
                        <div className="shop-arrow"><p>Shop now<span>&#8594;</span></p></div>
                    </div>
                </Link>

                {/* Added fresh image link (mirrors Live section) */}
                <Link to="/category/Fresh-flowers">
                    <div className="fresh-img">
                        <img src={Fresh} alt="fresh flowers link" />
                    </div>
                </Link>
                
            </div>
            
            <div className="dried all">

                <Link to = "/category/dry-flowers">
                    <div className="dried-img">
                        <img src={Dried} alt="dried flowers link" />
                    </div>
                </Link>

                <Link to="/category/dry-flowers" className='no-underline'>
                    <div className="dried-text">
                        <h3>Dried Flowers</h3>
                        <div className="shop-arrow"><p><span>&#8592;</span>Shop now</p></div>
                    </div>
                </Link>
            </div>
            
            <div className="live all">

                <Link to="/category/live-plants" className='no-underline'>
                    <div className="live-text">
                        <h3>Live Plants </h3>
                        <div className="shop-arrow"><p>Shop now   <span>&#8594;</span></p></div>
                    </div>
                </Link>
                 
                <Link to="/category/live-plants">
                    <div className="live-img">
                        <img src={Live} alt="live plants flowers link" />
                    </div>
                </Link>  
            </div>
           
           <div className="aroma all">
                <Link to="/category/aroma-candles">
                    <div className="aroma-img">
                        <img src={Aroma} alt="aroma plants flowers link" />
                    </div>
                </Link>
                
                <Link to="/category/aroma-candles" className='no-underline'>
                    <div className="aroma-text">
                        <h3>Aroma Candels</h3>
                        <div className="shop-arrow "><p><span>&#8592;</span>   Shop now</p></div>
                    </div>
                </Link>
           </div>
            

            <div className="fresheners all">

                <Link to="/category/fresheners" className='no-underline'>
                    <div className="fresheners-text">
                        <h3>Fresheners</h3>
                        <div className="shop-arrow"><p>Shop now   <span>&#8594;</span></p></div> 
                    </div>
                </Link>
                 
                 <Link to="/category/fresheners">
                    <div className="fresheners-img">
                        <img src={Fresheners} alt="fresheners flowers link" />
                    </div>
                 </Link>
                
            </div>
        </div>
        </>
     );
}
 
export default Category;
// ...existing code...