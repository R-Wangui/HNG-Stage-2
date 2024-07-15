import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/pages/ProductListing'
import ProductDetails from './components/pages/ProductDetails'
import Checkout from './components/pages/Checkout';
import CartPage from './components/pages/CartPage';
import SearchDropdown from './components/layout/SearchDropdown';
import { useState } from 'react';
// import  CartProvider  from './components/layout/CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }
  return (
    <>
      
        <Router>
          <Routes>
            <Route path="/" element={<ProductListing cart={cart} addToCart={addToCart} />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/searchdropdown" element={<SearchDropdown />} />

          </Routes>
        </Router>
      
    </>
  )
}

export default App