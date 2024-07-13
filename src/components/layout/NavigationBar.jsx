import { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavigationBar.css'
import SearchDropdown from '../layout/SearchDropdown';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
function NavigationBar() {

    const { cartItems } = useCart();

    const [showOverlay, setShowOverlay] = useState(false);

  const handleOpenOverlay = (e) => {
    e.preventDefault();
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navigationBar'>
        <Container fluid>
            <Navbar.Brand href="/" id='logo'>
                <span style={{color: '#7E9549'}}>Jewel</span>
                <span style={{color: '#C3AD48'}}>BOX</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" id='categories'> 
                    <Nav.Link href="#home" style={{ftextDecoration: 'underline' , color: '#7E9549'}}>NEW ARRIVALS</Nav.Link>
                    <Nav.Link href="#home">EARRINGS</Nav.Link>
                    <Nav.Link href="#home">RINGS</Nav.Link>
                    <Nav.Link href="#home">NECKLACES</Nav.Link>
                    <Nav.Link href="#home">BRACELETS</Nav.Link>
                    <Nav.Link href="#home">MEN'S</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className='navigation'>
                <i
                    onClick={handleOpenOverlay}
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    className="bi bi-search"
                ></i>
                {showOverlay && <SearchDropdown onClose={handleCloseOverlay} />}
                <div className='navigationSignup'>
                    <i class="bi bi-person-circle" style={{fontSize: '1.5rem'}}></i>
                </div>
                <div className='navigationCart'>
                    <Link to="/cartpage">
                        <i class="bi bi-handbag-fill" style={{ fontSize: '1.5rem', color: '#7E9549' }}></i>
                        {/* Display cart item count */}
                        {cartItems.length > 0 && (
                        <span className="cart-item-count">{cartItems.length}</span>
                        )}
                        {/* <img src="/CartIcon.png" alt="" /> */}
                    </Link>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;
export { CartProvider };