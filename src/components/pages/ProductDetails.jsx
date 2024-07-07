import { Button } from 'react-bootstrap'
import NavigationBar from '../layout/NavigationBar'
import Footer from '../layout/Footer'
import JewelleryCards from '../JewelleryCards'

function ProductDetails() {
    const sizeButton = {
        backgroundColor: '#000000',
        border: 'none',
        padding: '8px'
    }
    const addToBagButton = {
        backgroundColor: '#7E9549',
        border: 'none',
        padding: '8px 16px',
        width: '332px',
        marginRight: '16px'
    }
    const heart40Button = {
        backgroundColor: '#D7D7D7',
        border: 'none'
    }
    
  return (
    <>
        <NavigationBar />
        <div className='categories'>
            <p>SHOP BY:</p>
            <u style={{color: '#7E9549'}}><p>NEW ARRIVALS</p></u>
            <p>EARRINGS</p>
            <p>RINGS</p>
            <p>NECKLACES</p>
            <p>BRACELETS</p>
            <p>MEN'S</p>
        </div>
        <div className='breadcrumbs'>
            <span>JewelBOX </span>
            <i class="bi bi-chevron-right" style={{color: '#7E9549'}}></i>
            <span> New Arrivals </span>
            <i class="bi bi-chevron-right" style={{color: '#7E9549'}}></i>
            <span> Persian Bubble Ring </span>
        </div>
        <div id='productDetails'>
            <div className='productDetails'>
                {/* This main div; has 2 nested divs for Images and product details  */}
                <div className='productImages'>
                    <img src="/Frame 65.png" alt="" />
                    <div className='differentAnglesImage'>
                        <img className='differentAnglesImage1' src="/Frame 66.png" alt="" />
                        <img className='differentAnglesImage2' src="/Frame 67.png" alt="" />
                    </div>
                </div>
                {/* Div with the product details; has nested divs for different information  */}
                <div className='productInformation'>
                    <div>
                        <h5>Persian Bubble Ring</h5>
                        <p>₦ 5,599.00</p>
                    </div>
                    <div>
                        <span style={{backgroundColor: '#FAFAFA', color: '#000000', padding: '16px 8px'}}>
                            <i class="bi bi-gift-fill" style={{color: '#7E9549', marginRight: '12px'}}></i>  
                            New Arrival 
                        </span> 
                        <span style={{backgroundColor: '#FAFAFA', color: '#D21C1C', marginLeft: '16px', padding: '16px 8px', fontSize: '18px', fontWeight: '500'}}> 
                            Limited in Stock
                        </span>
                    </div>
                    <div>
                        <Button style={sizeButton}>
                            Choose Size: 8 <i class="bi bi-chevron-down" style={{marginLeft: '8px'}}></i>
                        </Button>
                    </div>
                    <div>
                        <span style={{marginRight: '20px'}}>Ratings & Reviews </span>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span> 4.9</span>
                    </div>
                    <div>
                        <Button size="lg" style={addToBagButton}>Add to Bag</Button>
                        <span>
                            <Button size="lg" style={heart40Button}>
                                <i class="bi bi-suit-heart-fill" style={{color: '#333333'}}></i> 40
                            </Button>
                        </span>
                    </div>
                    <div className='servicePerks'>
                        <ul>
                            <li>
                                <i class="bi bi-truck" style={{color: '#999999'}}></i>
                                <span style={{marginLeft: '16px'}}> <u>Free Shipping on all local orders above 5000 NGN</u></span>
                            </li>
                            <li>
                                <i class="bi bi-arrow-return-left" style={{color: '#999999'}}></i>
                                <span style={{marginLeft: '16px'}}> <u>Returns are allowed on only local orders with damaged <span style={{marginLeft: '36px'}}>parcel or items</span></u></span>
                            </li>
                            <li>
                                <i class="bi bi-patch-check" style={{color: '#999999'}}></i>
                                <span style={{marginLeft: '16px'}}> <u>Authenticity certifications for GIA, HRD and IGI diamonds</u> </span>
                            </li>
                        </ul>
                    </div>
                    <div className='productDetailsAccordion'>
                        <span style={{fontSize: '16px', fontWeight: '400'}}> What are you Getting? </span>
                        <span style={{marginLeft: '254px'}}>
                            <i class="bi bi-chevron-up"></i>
                        </span>
                        <ol style={{fontSize: '14px', fontWeight: '300'}}>
                            <li>Gold vermeil: a thick 16k gold layer on sterling silver.</li>
                            <li>Band thickness: 4.0 - 12.6mm</li>
                        </ol>
                    </div>
                    <div>
                        <span style={{fontSize: '16px', fontWeight: '400'}}> 
                            Description 
                        </span>
                        <span style={{marginLeft: '336px'}}>
                            <i class="bi bi-chevron-up"></i>
                        </span>
                        <p style={{fontSize: '14px', fontWeight: '300'}}>This is a classic bold design, but we made it ultra - light so that nothing is weighing
                            you down ( we wouldn’t want that ). It is handcrafted in vermeil, a thick 16k gold 
                            layer on persian bubble design of sterling silver. Pair it with daintier rings to create
                            a basic stack.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='similarItems'>
            <h4>Similar items people buy </h4>
            <JewelleryCards />
        </div>
        <Footer />
    </>
  )
}

export default ProductDetails