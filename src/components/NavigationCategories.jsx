import Button from 'react-bootstrap/Button';


function NavigationCategories() {
  const filterButtons = {
    backgroundColor: '#F2FAE1',
    color: '#000000',
    border: 'none'
  }
  return (
    <>
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
          <span>JewelBOX </span><i class="bi bi-chevron-right" style={{color: '#7E9549'}}></i><span> New Arrivals</span>
        </div>
        <div className='heroTagline'>
          <h3>Checkout our latest New Arrivals</h3>
          <p>Below are our newest products, want something new ?</p>
        </div>
        <div className='filter'>
          <Button style={filterButtons}>All</Button>{' '}
          <Button style={filterButtons}>Earrings</Button>{' '}
          <Button style={filterButtons}>Rings</Button>{' '}
          <Button style={filterButtons}>Necklaces</Button>{' '}
          <Button style={filterButtons}>Bracelets</Button>{' '}
          <span>Sort by: Recommended </span> <i class="bi bi-chevron-down"></i>
        </div>
    </>
  )
}

export default NavigationCategories