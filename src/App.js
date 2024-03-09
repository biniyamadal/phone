import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Payment from './components/Payment';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const exist = cartItem.find((item) => item.id === product.id);
    if (exist) {
      alert('This product is already added');
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart addToCart={addToCart} cartItem={cartItem} setCartItem={setCartItem} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/services" element={<Services addToCart={addToCart}  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
      <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
      </Routes>
    </>
  );
};

export default App;
