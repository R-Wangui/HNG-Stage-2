import { Button } from 'react-bootstrap'
import '../styles/JewelleryCard.css'
import '../styles/ButtonStyles.css'

function JewelleryCard() {
  return (
    <>
      <div className='jewelleryCards'>
        <div className='productCard'>
          <img src="/ProductListingImage-1.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Ragnar Rock Rings ( Gold )</p>
              <h5>₦ 700,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-2.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>4 in 1 Set Rings(Gold)</p>
              <h5>₦ 900,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-3.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Knuckle Rings(Gold)</p>
              <h5>₦ 450,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-4.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Persian Bubble Ring(Gold)</p>
              <h5>₦ 150,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-5.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Bishop Band Rings(Gold)</p>
              <h5>₦ 200,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-6.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Blue Diamond Wedding Ring</p>
              <h5>₦ 1,200,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-7.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>3 Set Gold Rings with Pearl</p>
              <h5>₦ 800,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-8.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>4 Set Gold Rings</p>
              <h5>₦ 250,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-9.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Ripple Set Ring(Gold)</p>
              <h5>₦ 90,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-10.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Queen's Cut Diamond Ring</p>
              <h5>₦ 2,500,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-11.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Set of Pharaoh Rings</p>
              <h5>₦ 600,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
        <div className='productCard'>
          <img src="/ProductListingImage-12.png" alt="" />
            <i class="bi bi-heart"></i>
          <div className='productDescription'>
            <div>
              <p>Pearl Gold Rings</p>
              <h5>₦ 380,000</h5>
            </div>
            <Button className='productCardButton'>ADD</Button>
          </div>
        </div>
      </div>
      <div className='pagination'>
        <p>Showing 12 of 12 results</p>
      </div>
    </>
  )
}

export default JewelleryCard