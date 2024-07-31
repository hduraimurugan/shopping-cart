import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, total}) => {

  return (
    <div>
      {/* Cart details in Modal */}
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} : ₹{(item.price).toLocaleString('en-IN')}
              <button className="btn btn-outline-danger btn-sm" onClick={() => onRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3">Total Items: {cartItems.length}</p>
      <p className="mt-3">Total Price: ₹{total.toLocaleString('en-IN')}</p>
    </div>
  );
};

export default Cart;
