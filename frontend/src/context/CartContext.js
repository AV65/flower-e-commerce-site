// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const mappedItem = {
      id: product._id,
      name: product.Title,
      price: Number(product.Price),
      image:
        product.Image.startsWith("http")
          ? product.Image
          : `https://flower-website-backend-two.onrender.com${product.Image}`,
      quantity,
    };

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === mappedItem.id);

      if (existing) {
        return prev.map((item) =>
          item.id === mappedItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, mappedItem];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
