import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavigationBar.css'
import SearchDropdown from '../layout/SearchDropdown';
import { useCart } from '../../CartContext'



function NavigationBar() {

    const { cartItems } = useCart();
    console.log('Cart Items:', cartItems);

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
                    <i className="bi bi-person-circle" style={{fontSize: '1.5rem'}}></i>
                </div>
                <div className='navigationCart'>
                    <Link to="/cartpage">
                        <i className="bi bi-handbag-fill" style={{ fontSize: '1.5rem', color: '#7E9549' }}></i>
                        {cartItems.length > 0 && (
                        <span className="cartItemCount">{cartItems.length}</span>
                        )}
                    </Link>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;
