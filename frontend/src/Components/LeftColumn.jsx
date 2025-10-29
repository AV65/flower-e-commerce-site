import "./LeftColumn.css";
import Rectangle from "../assets/Rectangle 113.webp";

const LeftColumn = () => {
  return (
    <>
      <div className="left-column1">
        <div className="kyiv-text">
          <h1>Kyiv LuxeBouquets®</h1>
          <p>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>
        </div>
        <div className="kyiv-wrapper">
          <div className="kyiv-contents">
            <div className="kyiv-img">
              <img className="rect" src={Rectangle} alt="rect" />
            </div>
            <div className="vertical-line"></div>
            <div className="kyiv-p">
              <p>
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftColumn;
