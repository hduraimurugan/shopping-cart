import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart, cartItems }) => {
  return (
    <div className="row">

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          inCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
      
    </div>
  );
};

export default ProductList;
