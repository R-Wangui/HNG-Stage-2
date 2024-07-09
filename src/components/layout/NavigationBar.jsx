import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavigationBar.css'
import SearchDropdown from '../SearchDropdown';


function NavigationBar() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOpenOverlay = () => {
        setShowOverlay(true);
      };
    
      const handleCloseOverlay = () => {
        setShowOverlay(false);
      };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navigationBar'>
        <Container fluid>
            <Navbar.Brand href="#" id='logo'>
                <span style={{color: '#7E9549'}}>Jewel</span>
                <span style={{color: '#C3AD48'}}>BOX</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" id='categories'> 
                    <Nav.Link href="#home">NEW ARRIVALS</Nav.Link>
                    <Nav.Link href="#home">EARRINGS</Nav.Link>
                    <Nav.Link href="#home">RINGS</Nav.Link>
                    <Nav.Link href="#home">NECKLACES</Nav.Link>
                    <Nav.Link href="#home">BRACELETS</Nav.Link>
                    <Nav.Link href="#home">MEN'S</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className='navigation'>
                <Link to="/searchdropdown" style={{color: 'black', textDecoration: 'none'}}>
                    <i onClick={handleOpenOverlay}
                    style={{ fontSize: '1.5rem' }}
                    className="bi bi-search"
                    ></i>
                </Link>
                {showOverlay && <SearchDropdown show={showOverlay} onClose={handleCloseOverlay} />}
                
                <div className='navigationSignup'>
                    <i class="bi bi-person-circle" style={{fontSize: '1.5rem'}}></i>
                </div>
                <div className='navigationCart'>
                    <Link to="/cartpage">
                        <i class="bi bi-handbag-fill" style={{fontSize: '1.5rem', color: '#7E9549'}}></i>
                    </Link>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;