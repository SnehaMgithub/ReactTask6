import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert('Product already exists');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} cart={cart}  removeFromCart={removeFromCart}/>} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
