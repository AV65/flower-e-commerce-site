import BRArrow from "../../assets/arrow-bottom-right.svg";
import Foryou from "../../assets/foryou.webp";
import ClassicPlan from "../../assets/classicplan.webp";
import SeasonalPlan from "../../assets/seasonalplan.jpg";
import LuxePlan from "../../assets/luxeplan.jpg";
import Happiness from "../../assets/image (1).webp";
import "./Subscription.css";
import { useState } from "react";

const Subscription = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <div className="foryou-flowersub-div">
          <div className="foryou-pic">
            <img src={Foryou} alt="banner" />
          </div>
          <div className="flower-sub-div">
            <div className="foryourself">
              <h1>Flower Subscription</h1>
              <h6>For Yourself</h6>
              <li>
                The perfect way to keep your home fresh and beautiful. Get a
                regular delivery of stunning bouquets straight to your doorstep
                without lifting a finger. Enjoy the beauty and fragrance of
                fresh flowers hassle-free!
              </li>
            </div>

            <div className="asagift">
              <h6>As a Gift</h6>
              <li>
                Simply provide us with their address and let us take care of the
                rest, delivering beautiful blooms straight to their doorstep at
                the frequency and duration of your choosing.
              </li>
            </div>

            <div className="forbiz">
              <h6>For Business</h6>
              <li>
                Is a great way to create a pleasant atmosphere and leave a good
                impression on your guests and customers. Fresh floral
                arrangements will improve the aesthetic image of your business,
                and our service guarantees timely replacement without extra care
                or effort on your part.
              </li>
            </div>

            <div className="sub-btn">
              <button>EXPLORE PLANS</button>
            </div>
          </div>
        </div>
        <div className="howflex">
          <div className="howitworks">
            <h2>How does it work?</h2>
          </div>
          <div className="cfp">
            <div className="chooseaplan">
              <h3>Choose a plan</h3>
              <p>
                Select the subscription plan that suits you best from our three
                bouquet designs: classic, seasonal, and deluxe. Each plan comes
                with a designer vase, free delivery, and a discount of up to
                30%. Our seasonal and deluxe plans also include a luxurious
                scented candle to enhance the ambiance.
              </p>
            </div>

            <div className="freq-duration">
              <h3>Frequency and Duration</h3>
              <p>
                Choose delivery frequency: once a week, every two weeks, or once
                a month. Then, select your subscription duration from 3 to 12
                months. Enjoy savings with a longer subscription. We understand
                that every customer has different needs, and we aim to provide
                flexible subscription options that cater to your specific
                preferences.
              </p>
            </div>

            <div className="pay-once">
              <h3>Pay once</h3>
              <p>
                After entering your contact and delivery information and paying
                for your subscription, you can sit back and relax, knowing that
                you have secured a regular supply of fresh, stunning flowers for
                yourself or your loved ones
              </p>
            </div>
          </div>
        </div>

        <div className="happiness-build-div">
          <div className="happiness">
            <img src={Happiness} alt="Happiness pic" />
          </div>

          <div className="build">
            <div className="selectplan">
              <h6>BUILD YOUR SUBSCRIPTION</h6>
              <h3>Selecting a Plan</h3>
              <p>
                Enjoy free shipping on every order and save up to 30%. Every
                bouquet we deliver is carefully curated to ensure it arrives
                fresh and stunning. To modify, pause, or cancel your
                subscription, simply log in to your account dashboard. You're in
                complete control of your flower delivery experience.
              </p>
            </div>
            <div className="classic-btn btn1">
              <button>SELECT</button>
            </div>
            <div className="classic">
              <img src={ClassicPlan} alt="Classic plan" />

              <ul>
                <h4>Classic</h4>
                <li>Price $45</li>
                <li>Free Delivery</li>
                <li>Best for a budget</li>
                <li>Glass vase with first delivery</li>
                <li>Save up to 25%</li>
              </ul>
            </div>
            <div className="classic-btn">
              <button>SELECT</button>
            </div>

            <div className="seasonal">
              <img src={SeasonalPlan} alt="Seasonal plan" />

              <ul>
                <h4>Seasonal</h4>
                <li>Price $65 </li>
                <li>Free Delivery</li>
                <li>Best seasonal selections</li>
                <li>Glass vase with first delivery</li>
                <li>Luxury candle with your first delivery</li>
                <li>Save up to 28%</li>
              </ul>
            </div>
            <div className="classic-btn">
              <button>SELECT</button>
            </div>

            <div className="luxe">
              <img src={LuxePlan} alt="Luxe plan" />

              <ul>
                <h4>Luxe</h4>
                <li>Price $95</li>
                <li>Free Delivery</li>
                <li>Premium arrangement</li>
                <li>Premium vase with first delivery</li>
                <li>Luxury candle with your first delivery</li>
                <li>Save up to 30%</li>
              </ul>
            </div>
            <div className="classic-btn">
              <button>SELECT</button>
            </div>

            <div className="how-often-div">
              <h4>How often do you want flowers delivered ?</h4>
              <p>Select the delivery frequency</p>
              <div className="how-often-btns">
                <button>MONTHLY</button>
                <button>BI-WEEKLY</button>
                <button>WEEKLY</button>
              </div>
            </div>

            <div className="how-many-div">
              <h4>How many deliveries would you like ?</h4>
              <p>
                Pay once and do not worry about flowers, our bouquets will be
                beautiful and on time, as many times as you need{" "}
              </p>
              <div className="how-many-click">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </div>
            <div className="checkout-btn">
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="faq-div-margin">
          <div className="faq-div">
            <h2>Subscription FAQ</h2>
            <div className="faqs">
              <h6>How often will I get a new bouquet?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
            <div className="faqs">
              <h6>Can i send subscription like as a gift ?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
            <div className="faqs">
              <h6>Can I choose which bouquet I get ?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
            <div className="faqs">
              <h6>Can I change the shipping address ?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
            <div className="faqs">
              <h6>What day will the subscription bouquet come?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
            <div className="faqs">
              <h6>Can I suspend my subscription to flowers ?</h6>
              <img src={BRArrow} alt="arrow bottom right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
