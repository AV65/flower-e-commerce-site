// src/Pages/User Pages/Cart.js
import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
import Lock from "../../assets/lockic.svg";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + price * qty;
  }, 0);

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be signed in to checkout");
      return;
    }
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/stripe/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cartItems }),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Error creating checkout session:", err);
      alert("Failed to initiate checkout. Please try again.");
    }
  };

  return (
    <>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-img-n-q">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-name-q">
                <h3>{item.name}</h3>
                <p>Quantity ({item.quantity})</p>
              </div>

              <div className="cart-info">
                <div className="cart-price">
                  <p>${Number(item.price).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="sub-total">
              <p>SubTotal: </p>
              <p>${(Number(item.price) * item.quantity).toLocaleString()}</p>
            </div>

            <div className="shipping">
              <p>Shipping</p>
              <p className="nextstep">Calculated at next step</p>
            </div>

            <hr />

            <span
              className="delete-icon material-symbols-outlined"
              onClick={() => removeFromCart(item.id)}
            >
              delete
            </span>
          </div>
        ))}

        <div className="total">
          <h3>Total:</h3>
          <h3>${total.toLocaleString()}</h3>
        </div>

        <div className="cart-btn">
          <button onClick={handleCheckout}>
            CHECK OUT
          </button>
        </div>

        <div className="cart-footer">
          <h5>Secure Checkout</h5> <img src={Lock} alt="Lock icon" />
        </div>
      </div>
    </>
  );
};

export default Cart;
