import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Category from './Pages/Category Pages/Category';
import Product from './Pages/Product Pages/Product';
import Subscription from './Pages/Subscription Page/Subscription';
import About from './Pages/About Us Page/AboutUs';
import Cart from './Pages/User Pages/Cart';
import SignIn from './Pages/User Pages/Signin';
import SignUp from './Pages/User Pages/SignUp';
import Contact from './Components/Contact';
import Cate from './Components/Shop';
import Success from './Pages/User Pages/Success';

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add item to cart
  const addToCart = (item) => {
    setCart(prev => [...prev, { ...item, quantity: 1 }]);
  };

  return (
    <div className="App-container">
      <>
        <Header cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryType" element={<Category />} />

          {/*  Pass addToCart into Product Page */}
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />

          <Route path="/subscription" element={<Subscription />} />
          <Route path="/about" element={<About />} />

          {/*  Pass cart into Cart Page */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/success" element={<Success />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Cate />} />
        </Routes>

        <Footer />
      </>
    </div>
  );
}

export default App;
