import CheckoutNavigationBar from '../layout/CheckoutNavigationBar'
import '../styles/Checkout.css'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/ButtonStyles.css'


function Checkout() {
    // const checkoutButton = {
    //     backgroundColor: '#7E9549',
    //     width: '100%', 
    //     border: 'none'
    // }
    // const promoButton = {
    //     backgroundColor: '#333333', 
    //     border: 'none',
    //     height: '44px',
    //     borderRadius: 'none'
    // }
  return (
    <>
        <CheckoutNavigationBar />
        <div className='checkoutBreadcrumbs'>
            <p><span>1</span> Shipping</p>
            <p><span>2</span> Delivery</p>
            <p><span>3</span> Payment</p>
        </div>
        <div className='checkoutPage'>
            <div className='checkout'>
                <div className='shipping'>
                    <span className='checkoutTitles'>
                        <span>1. Shipping </span><span>Edit</span>
                    </span>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="name" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control type="Name" placeholder="Last Name" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="+254 700123456" />
                        </Form.Group>
                    </Form>
                </div>
                <div className='delivery'>
                    <span className='checkoutTitles'>
                        <span>2. Delivery </span> <span>Edit</span>
                    </span>
                    <p>Shipping Option</p>
                    <div> 
                        <span>
                            <Form.Check inline type="radio" aria-label="radio 1" /> 
                        </span>
                        <span> Express Shipping (Delivery in 2-4 business days)</span><span style={{marginLeft: '192px'}}> FREE</span>
                    </div>
                    <div>
                        <span>
                            <Form.Check inline type="radio" aria-label="radio 1" /> 
                        </span>
                        <span> Standard Shipping (Delivery in 2 weeks)</span><span style={{marginLeft: '222px'}}> ₦ 18,000</span>
                    </div>
                    <div className='deliveryInstructions'>
                        <p>Delivery Instructions</p>
                        <input type="text" placeholder='Additional notes...' />
                    </div>
                </div>
                <div className='payment'>
                    <span className='checkoutTitles'>3. Payment </span>
                    <div className='paymentOptions'>
                        <span className='paymentOption1'>
                            <Form.Check inline type="radio" aria-label="radio 1" />
                            <span> Credit or Debit card</span>
                        </span>
                        <span className='paymentOption1'>
                            <Form.Check inline type="radio" aria-label="radio 1" />
                            <span> Cash on Delivery</span>
                        </span>
                        <span className='paymentOption1'>
                            <Form.Check inline type="radio" aria-label="radio 1" /> 
                            <span> JewelBOX Wallet Balance</span>
                        </span>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Add Promo Code"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">APPLY</Button>
                        </InputGroup>
                        <p>By placing this order, you agree to our Terms of Service and understand our Privacy Policy. </p>
                        <Button className='checkoutButton' size="lg" disabled>Confirm Order</Button>
                    </div>
                </div>
            </div>
            <div className='orderSummary'>
                <p style={{fontSize: '18px', fontWeight: '400'}}>Order Summary</p>
                <div className='yourOrders'>
                    <div className='order1'>
                        <img src="/Checkout image1.png" alt="Persian Bubble Ring" />
                        <div  className='order1Details'>
                            <span style={{fontSize: '18px', fontWeight: '400'}}>1 x Persian Bubble Ring</span>
                            <span style={{fontSize: '14px'}}>Size 8, Gold Vermeil</span>
                            <span className='order1SpanLeft'>₦ 5,599.00</span>
                        </div>
                    </div>
                    <div className='order1'>
                        <img src="/Checkout image1.png" alt="Persian Bubble Ring" />
                        <div  className='order1Details'>
                            <span style={{fontSize: '18px', fontWeight: '400'}}>1 x Pearl Dome Ring</span>
                            <span style={{fontSize: '14px'}}>Size 10, Pearl Stone, Gold Vermeil</span>
                            <span className='order1SpanLeft'>₦ 65,999.00</span>
                        </div>
                    </div>
                </div>
                <div className='amountToPay'>
                    <span className='amountToPaySpanLeft'>Subtotal </span><span className='amountToPaySpanRight'>₦ 71,598.00</span>
                    <br />
                    <span style={{marginRight: '142px'}}>Shipping Cost </span><span style={{fontSize: '18px', fontWeight: '400'}}>Free</span>
                    <hr />
                    <span className='amountToPaySpanLeft'>Total Cost </span><span className='amountToPaySpanRight'>₦ 71,960.00</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout