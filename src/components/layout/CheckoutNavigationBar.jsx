import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CheckoutNavigationBar() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" id='checkoutNavigationBar'>
            {/* <i class="bi bi-arrow-left" style={{fontSize: '2rem', color: '#000000'}}>Back</i> */}
            <Container>
                <div>
                    <Link to="/cartpage" style={{color: 'black', textDecoration: 'none'}} >
                        <span><i class="bi bi-arrow-left"></i></span>
                        <span style={{marginLeft: '8px'}}>Back</span>
                    </Link>
                </div>
                <Navbar.Brand href="#" id='logo'>
                    <span style={{color: '#7E9549'}}>Jewel</span>
                    <span style={{color: '#C3AD48'}}>BOX</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
  );
}

export default CheckoutNavigationBar;