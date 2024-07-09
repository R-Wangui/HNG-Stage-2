import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CheckoutNavigationBar() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" id='checkoutNavigationBar'>
            {/* <i class="bi bi-arrow-left" style={{fontSize: '2rem', color: '#000000'}}>Back</i> */}
            <Container>
                <div>
                    <span><i class="bi bi-arrow-left"></i></span>
                    <span style={{marginLeft: '8px'}}>Back</span>
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