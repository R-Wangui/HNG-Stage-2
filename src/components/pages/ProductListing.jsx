import NavigationBar from '../layout/NavigationBar'
import Hero from '../Hero'
import NavigationCategories from '../NavigationCategories'
import JewelleryCards from '../JewelleryCards'
import Footer from '../layout/Footer'




function ProductListing() {
  return (
    <>
        <NavigationBar />
        <Hero />
        <NavigationCategories />
        <JewelleryCards />
        <Footer />
    </>
  )
}

export default ProductListing