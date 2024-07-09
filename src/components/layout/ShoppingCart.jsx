import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Item already exists in cart, update quantity
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };
  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedItems);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {/* Display cart items */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price} - Quantity: {item.quantity}</span>
                <button onClick={() => addItemToCart(item)}>+</button>
                <button onClick={() => removeItemFromCart(item.id)}>-</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default ShoppingCart;