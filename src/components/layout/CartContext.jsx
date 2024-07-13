// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export default function CartProvider({ children }) { 
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children || <div>Default content</div>}
//     </CartContext.Provider>
//   );
// }