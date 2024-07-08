// import React from 'react'

// function CartPage() {
//   return (
//     <>
//         <div>
//             <i class="bi bi-x-lg"></i>
//             <div>
//                 <h5>Your Bag</h5>
//                 <hr />
//                 <div className='cartOrderItem'>
//                     <img src="" alt="" />
//                     <div>
//                         <div>
//                             <span>Persian Bubble Ring</span>
//                             <span>Size 8, Gold Vermeil</span>
//                         </div>
//                         <div>
//                             <i class="bi bi-dash-lg"></i>
//                             <span>1</span>
//                             <i class="bi bi-plus-lg"></i>
//                         </div>
//                     </div>
//                     <div>
//                         <span>₦ 5,599.00</span>
//                         <div>
//                             <span>Remove item</span>
//                             <i class="bi bi-trash"></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default CartPage
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/CartPage.css'
import NavigationBar from '../layout/NavigationBar';
import Footer from '../layout/Footer';

function CartPage() {
    
  return (
    <>
        <NavigationBar />  
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial'}}
        id='cartModal'
        >
        <Modal.Dialog size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Your Bag</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='cartOrderItem'>
                    <img src="/Cart Image1.png" alt="Persian Bubble Ring" />
                    <div className='orderDescription'>
                            <div className='orderName'>
                                <span>Persian Bubble Ring</span>
                                <br />
                                <span>Size 8, Gold Vermeil</span>
                            </div>
                            <div className='orderQuantity'>
                                <i class="bi bi-dash-lg"></i>
                                <span> 1 </span>
                                <i class="bi bi-plus-lg"></i>
                            </div>
                    </div>
                    <div className='orderAmount'>
                            <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', color: '#1C1C1C', fontSize: '24px', fontWeight: '500'}}>₦ 5,599.00</span>
                            <div className='orderTrash'>
                                <span>Remove item</span>
                                <i class="bi bi-trash" style={{color: '#999999', marginLeft: '8px'}}></i>
                            </div>
                    </div>
                </div>
                <hr />
                <div className='cartOrderItem'>
                    <img src="/Cart Image2.png" alt="Persian Bubble Ring" />
                    <div className='orderDescription'>
                        <div className='orderName'>
                            <span>Pearl Dome Ring</span>
                            <br />
                            <span>Size 10, Pearl Stone, Gold Vermeil</span>
                        </div>
                        <div className='orderQuantity'>
                            <i class="bi bi-dash-lg"></i>
                            <span> 1 </span>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div className='orderAmount'>
                        <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', color: '#1C1C1C', fontSize: '24px', fontWeight: '500'}}>₦ 65,599.00</span>
                        <div className='orderTrash'>
                            <span>Remove item</span>
                            <i class="bi bi-trash" style={{color: '#999999', marginLeft: '8px'}}></i>
                        </div>
                    </div>
                </div>
                <hr />
                <h5>Items you may need</h5>
                <div className='youMayNeed'>
                    <div className='suggestion1'>
                        <img src="/Cart Image3.png" alt="" />
                        <div className='orderName'>
                            <span>Pearl Dome Ring</span>
                            <br />
                            <span>Size 10, Pearl Stone, Gold Vermeil</span>
                        </div>
                        <div className='orderAmount'>
                            <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', color: '#1C1C1C', fontSize: '24px', fontWeight: '500'}}>₦ 65,599.00</span>
                            <div className='orderTrash'>
                                <Button variant="outline-secondary">
                                    <i class="bi bi-plus-lg" style={{color: '#999999', marginRight: '8px'}}></i>
                                    ADD
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='suggestion1'>
                        <img src="/Cart Image3.png" alt="" />
                        <div className='orderName'>
                            <span>Pearl Dome Ring</span>
                            <br />
                            <span>Size 10, Pearl Stone, Gold Vermeil</span>
                        </div>
                        <div className='orderAmount'>
                            <span style={{fontFamily: '"IBM Plex Sans", sans-serif;', color: '#1C1C1C', fontSize: '24px', fontWeight: '500'}}>₦ 65,599.00</span>
                            <div className='orderTrash'>
                                <Button variant="outline-secondary">
                                    <i class="bi bi-plus-lg" style={{color: '#999999', marginRight: '8px'}}></i>
                                    ADD
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='amountToPay'>
                    <span style={{fontSize: '18px', fontWeight: '400', marginRight: '132px'}}>Subtotal </span><span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '20px', fontWeight: '500'}}>₦ 71,598.00</span>
                    <br />
                    <span style={{fontSize: '18px', fontWeight: '400', marginRight: '162px'}}>Shipping Cost </span><span style={{fontSize: '18px', fontWeight: '400'}}>Free</span>
                    <br />
                    <span style={{fontSize: '18px', fontWeight: '400', marginRight: '162px'}}>VAT(0.5%)  </span><span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '20px', fontWeight: '500'}}>₦ 357.99</span>
                    <br />
                    <span style={{fontSize: '18px', fontWeight: '500', marginRight: '132px'}}>Total Cost </span><span style={{fontFamily: '"IBM Plex Sans", sans-serif;', fontSize: '20px', fontWeight: '500'}}>₦ 71,960.00</span>
                </div>
                
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Checkout</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
        <Footer />
    </>
  );
}

export default CartPage;