import CheckoutNavigationBar from '../layout/CheckoutNavigationBar'
import '../styles/Checkout.css'
import Footer from '../layout/Footer'
import { Button } from 'react-bootstrap'


function Checkout() {
    const checkoutButton = {
        backgroundColor: '#7E9549',
        width: '100%', 
        border: 'none'
    }
    const promoButton = {
        backgroundColor: '#333333', 
        border: 'none',
        height: '44px',
        borderRadius: 'none'
    }
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
                    <div className='checkoutCustomerDetails'>
                        <div className='checkoutName'>
                            <span>Name: Chad Bosewick</span><span>Chad Bosewick</span>
                            <span>Email: </span> <span>Addtemi270@gmail.com</span>
                        </div>
                        <div className='checkoutCustomerAddress'>
                            <span>Address: 116, Vibranium Valley Cresecent, Off Local Airport Rd, Ikeja</span>
                        </div>
                    </div>
                </div>
                <div className='delivery'>
                    <span className='checkoutTitles'>
                        <span>2. Delivery </span> <span>Edit</span>
                    </span>
                    <p>Shipping Option</p>
                    <div>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Radio">
                                    <mask id="path-1-inside-1_176_1100" fill="white">
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"/>
                                    </mask>
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#999999"/>
                                    <path d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z" fill="#999999" mask="url(#path-1-inside-1_176_1100)"/>
                                    <circle id="Radio_2" cx="12" cy="12" r="4" fill="white"/>
                                </g>
                            </svg>  
                        </span>
                        <span> Express Shipping (2 - 4 Business days)</span><span> FREE</span>
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Radio">
                                <mask id="path-1-inside-1_176_1100" fill="white">
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"/>
                                </mask>
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#999999"/>
                                <path d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z" fill="#999999" mask="url(#path-1-inside-1_176_1100)"/>
                                <circle id="Radio_2" cx="12" cy="12" r="4" fill="white"/>
                                </g>
                            </svg>
                            <span> Online Payment</span>
                        </span>
                        <span className='paymentOption1'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Radio">
                                <mask id="path-1-inside-1_176_1100" fill="white">
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"/>
                                </mask>
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#999999"/>
                                <path d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z" fill="#999999" mask="url(#path-1-inside-1_176_1100)"/>
                                <circle id="Radio_2" cx="12" cy="12" r="4" fill="white"/>
                                </g>
                            </svg>
                            <span> Cash on Delivery</span>
                        </span>
                        <span className='paymentOption1'>
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Radio">
                                <mask id="path-1-inside-1_176_1100" fill="white">
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"/>
                                </mask>
                                <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#999999"/>
                                <path d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z" fill="#999999" mask="url(#path-1-inside-1_176_1100)"/>
                                <circle id="Radio_2" cx="12" cy="12" r="4" fill="white"/>
                                </g>
                            </svg> */}
                            <input type="radio" name="" id="" />
                            <span> Wallet Balance</span>
                        </span>
                    </div>
                    <div>
                        <div className='promoCode'>
                            <input type="text" placeholder='Add Promo Code' />
                            <Button style={promoButton} size="lg">Apply</Button>
                        </div>
                        <p>By placing this order, you agree to our Terms of Service and understand our Privacy Policy. </p>
                        <Button style={checkoutButton} size="lg" disabled>Confirm Order</Button>
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