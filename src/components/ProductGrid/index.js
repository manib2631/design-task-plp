import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/index';
import './index.css'

function ProductGrid () {
  // State for storing products(const ProductGrid = () => {)
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after initial render

  // Render the grid with ProductCards
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;