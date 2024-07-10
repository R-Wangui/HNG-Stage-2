import Button from 'react-bootstrap/Button';
import '../styles/CartPage.css'
import NavigationBar from '../layout/NavigationBar';
import Footer from '../layout/Footer';
import ItemsYouNeed from '../layout/ItemsYouNeed';
import '../styles/ButtonStyles.css'
import { useNavigate } from 'react-router-dom';

function CartPage() {
    
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/checkout');
    }
  return (
    <>
        <NavigationBar />  
        <div id='cartModal'>
            <div className='yourBag'>
                <span className='yourBagTitle'>
                    <span>Your Bag </span>
                    <span> 2 items</span>
                    <hr />
                </span>
                <div className='cartOrderItem'>
                    <img src="/Cart Image1.png" alt="Persian Bubble Ring" />
                    <div className='cartItem1'>
                        <div className='orderDescription'>
                            <span className='orderName'>
                                <span>₦ 150,000.00</span>
                                <br />
                                <span>Persian Bubble Ring</span>
                                <br />
                                <span>Size 8, Gold Vermeil</span>
                            </span>
                            <div className='save'>
                                <i class="bi bi-suit-heart"></i>
                                <span> Save for later</span>
                            </div>
                        </div>
                        <div className='orderAmount'>
                            <div className='orderQuantity'>
                                <i class="bi bi-dash-lg"></i>
                                <span> 1 </span>
                                <i class="bi bi-plus-lg"></i>
                            </div>
                            <div className='orderTrash'>
                                <span>Remove item</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='cartOrderItem'>
                    <img src="/Cart Image2.png" alt="Persian Bubble Ring" />
                    <div className='cartItem1'>
                        <div className='orderDescription'>
                            <div className='orderName'>
                                <span>₦ 800,000.00</span>
                                <br />
                                <span>Set of 3 Gold Rings with Pearl</span>
                                <br />
                                <span>Size 10, Pearl Stone Gold Vermeil</span>
                            </div>
                            <div>
                                <i class="bi bi-suit-heart"></i>
                                <span> Save for later</span>
                            </div>
                        </div>
                        <div className='orderAmount'>
                            <div className='orderQuantity'>
                                <i class="bi bi-dash-lg"></i>
                                <span> 1 </span>
                                <i class="bi bi-plus-lg"></i>
                            </div>
                            <div className='orderTrash'>
                                <span>Remove item</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='cartOrderSummary'>
                <h5>Total</h5>
                <hr />
                <span>Sub-total </span><span>₦ 71,598.00</span>
                <br />
                <span>Delivery Fee </span><span style={{fontSize: '18px', fontWeight: '400'}}>Free</span>
                <hr />
                <br />
                <div className='deliveryOffer'>
                    <i class="bi bi-truck" style={{fontSize: '2rem'}}></i>
                    <div>
                        <h6>FREE STANDARD DELIVERY</h6>
                        <p>Offer lasts until the 31st of July</p>
                        <u><p>Terms & Conditions Apply</p></u>
                    </div>
                </div>
                <Button onClick={handleClick} className='checkoutButton'>CHECKOUT</Button>
            </div>
        </div>
        <ItemsYouNeed />
        <Footer />
    </>
  );
}

export default CartPage;