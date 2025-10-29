import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    axios
      .get(`https://flower-website-backend-two.onrender.com/api/flowers/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("❌ Fetch Product Error:", err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setPopup({
      show: true,
      message: "✅ Flower added to basket!",
      type: "success",
    });

    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  const imgUrl = product.Image.startsWith("http")
    ? product.Image
    : `https://flower-website-backend-two.onrender.com${product.Image}`;

  return (
    <div className="flower-detail-page">
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="container-1440">
        <div className="image-1140">
          <img src={imgUrl} alt={product.Title} />
        </div>

        <div className="details-1440">
          <h5 className="producttext hh5">BOUQUETS FRESH FLOWERS / QUICK ORDER</h5>
          <h3 className="producttext hh3">
            {product.Title} - ₦{product.Price}
          </h3>
          <p className="producttext pp">{product.Description}</p>

          <div className="qfl">
            <h3 className="qh">Quantity</h3>
            <div className="qbtn">
              <button className="incdec" onClick={decreaseQty}>-</button>
              <div className="count-display">
                <span className="count">{quantity}</span>
              </div>
              <button className="incdec" onClick={increaseQty}>+</button>
            </div>
          </div>

          <div className="add-basket-con">
            <button className="add-basket-btn" onClick={handleAddToCart}>
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
