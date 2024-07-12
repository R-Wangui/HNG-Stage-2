import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/pages/ProductListing'
import Checkout from './components/pages/Checkout';
import CartPage from './components/pages/CartPage';
import SearchDropdown from './components/layout/SearchDropdown';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/searchdropdown' element={<SearchDropdown />} />

        </Routes>
      </Router>
    </>
  )
}

export default App