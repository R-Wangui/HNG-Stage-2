import Button from 'react-bootstrap/Button';
import '../styles/ButtonStyles.css'


function NavigationCategories() {
  
  return (
    <>
        <div className='listingTagline'>
          <h3>Checkout our latest New Arrivals</h3>
          <p>Below are our newest products, want something new ?</p>
        </div>
        <div className='filter'>
          <div className='filterSelection'>
            <Button className='filterButtons'>All</Button>{' '}
            <Button className='filterButtons'>Earrings</Button>{' '}
            <Button className='filterButtons1'>Rings</Button>{' '}
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