import Button from 'react-bootstrap/Button';
import '../components/styles/ButtonStyles.css'


function NavigationCategories() {
  
  return (
    <>
        {/* <div className='categories'>
          <p>SHOP BY:</p>
          <u style={{color: '#7E9549'}}><p>NEW ARRIVALS</p></u>
          <p>EARRINGS</p>
          <p>RINGS</p>
          <p>NECKLACES</p>
          <p>BRACELETS</p>
          <p>MEN'S</p>
        </div> */}
        {/* <div className='breadcrumbs'>
          <span>JewelBOX </span><i class="bi bi-chevron-right" style={{color: '#7E9549'}}></i><span> New Arrivals</span>
        </div> */}
        <div className='listingTagline'>
          <h3>Checkout our latest New Arrivals</h3>
          <p>Below are our newest products, want something new ?</p>
        </div>
        <div className='filter'>
          <div className='filterSelection'>
            <Button className='filterButtons'>All</Button>{' '}
            <Button className='filterButtons'>Earrings</Button>{' '}
            <Button className='filterButtons'>Rings</Button>{' '}
            <Button className='filterButtons'>Necklaces</Button>{' '}
            <Button className='filterButtons'>Bracelets</Button>{' '}
          </div>
          <div>
            <span>Sort by: Recommended  </span> <i class="bi bi-chevron-down"></i>
          </div>
        </div>
    </>
  )
}

export default NavigationCategories