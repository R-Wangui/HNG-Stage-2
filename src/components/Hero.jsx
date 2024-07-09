import { Button } from 'react-bootstrap'
import './styles/Hero.css'

function Hero() {
  return (
    <>
        <div className='heroSection'>
            <img src="/hero-image.jpg" alt="" />
            <div className='heroTagline'>
                <h1>EXCLUSIVE: SHOP THE LATEST NEW TRENDS</h1>
                <Button className='heroButton' >START SHOPPING</Button>
            </div>
        </div>
       
    </>
  )
}

export default Hero