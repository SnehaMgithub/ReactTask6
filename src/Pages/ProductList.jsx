import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart ,removeFromCart}) => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data); // Save the fetched data to state
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
      {products.map(item => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default ProductList;
