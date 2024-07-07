import { InputGroup, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navigationBar'>
        <Container fluid>
            <Navbar.Brand href="#" id='logo'>
                <span style={{color: '#7E9549'}}>Jewel</span>
                <span style={{color: '#C3AD48'}}>BOX</span>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >   
                <Form className="d-flex">
                    <InputGroup>
                        <Form.Control
                            type="search"
                            placeholder="Search JewelBOX"
                            className="me-2"
                            aria-label="Search"
                        /> 
                        <InputGroup.Text>
                            <i style={{fontSize: '1.5rem', color: '#7E9549'}} className="bi bi-search"></i>
                        </InputGroup.Text>
                    </InputGroup>
                </Form>
                
                </Nav>
            </Navbar.Collapse>
            <div className='navigation'>
                <div className='navHelp'>
                    <i class="bi bi-headset" style={{fontSize: '2rem', color: '#999999'}}></i>
                    <div className='helpNumber'>
                        <span style={{fontSize:'11px'}}>Need some help:</span><span style={{fontSize:'12px', color: 'blue'}}>+234 7087 166803</span>
                    </div>
                </div>
                <div className='navigationFlag'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="ng">
                            <g clip-path="url(#clip0_10_24)">
                                <g id="Group">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0 0H32V32H0V0Z" fill="white"/>
                                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M21.33 0H32V32H21.33V0ZM0 0H10.665V32H0V0Z" fill="#008753"/>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_10_24">
                                <rect width="32" height="32" rx="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span style={{fontSize:'14px'}}> NGR </span><i class="bi bi-chevron-down" style={{color: '#999999'}}></i>
                </div>
                <div className='navigationSignup'>
                    <i class="bi bi-person-circle" style={{fontSize: '2rem', color: '#999999'}}></i>
                    <span style={{fontSize:'14px'}}> Sign up</span>
                </div>
                <div className='navigationCart'>
                    <i class="bi bi-handbag-fill" style={{fontSize: '2rem', color: '#7E9549'}}></i>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;