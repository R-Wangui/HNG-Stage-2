import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavigationBar.css'


function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navigationBar'>
        <Container fluid>
            <Navbar.Brand href="#" id='logo'>
                <span style={{color: '#7E9549'}}>Jewel</span>
                <span style={{color: '#C3AD48'}}>BOX</span>
            </Navbar.Brand>
            <div className='categories'>
                <a href="http://" target="_blank" rel="noopener noreferrer">NEW ARRIVALS</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">EARRINGS</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">RINGS</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">NECKLACES</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">BRACELETS</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">MEN'S</a>

            </div>
            <div className='navigation'>
                <i style={{fontSize: '1.5rem'}} className="bi bi-search"></i>
                <div className='navigationSignup'>
                    <i class="bi bi-person-circle" style={{fontSize: '1.5rem'}}></i>
                </div>
                <div className='navigationCart'>
                    <i class="bi bi-handbag-fill" style={{fontSize: '1.5rem', color: '#7E9549'}}></i>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;