import { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Manage the state of the cart
export const useCart = () => useContext(CartContext);

function CartProvider({ children }) { 
  // Create the logic that adds to cart and removes from cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    // Provide context by wrapping elements that need the context in provider tags
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;