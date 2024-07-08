import React from 'react'
import CheckoutNavigationBar from '../layout/CheckoutNavigationBar'
import '../styles/Checkout.css'
import Footer from '../layout/Footer'


function Checkout() {
  return (
    <>
        <CheckoutNavigationBar />
        <div className='checkoutBreadcrumbs'>
            <p>1. Shipping</p>
            <p>2. Delivery</p>
            <p>3. Payment</p>
        </div>
        <div className='checkoutPage'>
            <div className='checkout'>
                <div className='shipping'>
                    <span className='checkoutTitles'>
                        <span>1. Shipping </span><span>Edit</span>
                    </span>
                    <div>
                        <div>
                            <span>Name: </span> <span>Chad Bosewick</span>
                            <span>Email: </span> <span>Addtemi270@gmail.com</span>
                        </div>
                        <div>
                            <span>Address: </span><span>116, Vibranium Valley Cresecent, Off Local Airport Rd, Ikeja</span>
                        </div>
                    </div>
                </div>
                <div className='delivery'>
                    <span>
                        <span>2. Delivery </span> <span>Edit</span>
                    </span>
                    <p>Shipping Option</p>
                    <div>
                        <span>Express Shipping (2 - 4 Business days)</span><span>FREE</span>
                    </div>
                    <div>
                        <p>Delivery Instructions</p>
                        <input type="text" placeholder='Additional notes...' />
                    </div>
                </div>
                <div className='payment'>
                    <span>3. Payment </span>
                    <div>
                        <span>Online Payment</span>
                        <span>Cash on Delivery</span>
                        <span>Wallet Balance</span>
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder='Add Promo Code' />
                            {/* <Button>Apply</Button> */}
                        </div>
                        {/* <p>By placing this order, you agree to our Terms of Service and understand our Privacy Policy. </p>
                        <Button>Confirm Order</Button> */}
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
                            <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '18px', fontWeight: '500'}}>₦ 5,599.00</span>
                        </div>
                    </div>
                    <div className='order1'>
                        <img src="/Checkout image1.png" alt="Persian Bubble Ring" />
                        <div  className='order1Details'>
                            <span style={{fontSize: '18px', fontWeight: '400'}}>1 x Pearl Dome Ring</span>
                            <span style={{fontSize: '14px'}}>Size 10, Pearl Stone, Gold Vermeil</span>
                            <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '18px', fontWeight: '500'}}>₦ 65,999.00</span>
                        </div>
                    </div>
                </div>
                <div className='amountToPay'>
                    <span style={{fontSize: '18px', fontWeight: '400', marginRight: '132px'}}>Subtotal </span><span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '20px', fontWeight: '500'}}>₦ 71,598.00</span>
                    <br />
                    <span style={{fontSize: '18px', fontWeight: '400', marginRight: '162px'}}>Shipping Cost </span><span style={{fontSize: '18px', fontWeight: '400'}}>Free</span>
                    <hr />
                    <span style={{fontSize: '18px', fontWeight: '500', marginRight: '132px'}}>Total Cost </span><span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '20px', fontWeight: '500'}}>₦ 71,960.00</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout