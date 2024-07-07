import JewelleryCard from '../layout/JewelleryCard'
import Footer from '../layout/Footer'
import NavigationBar from '../layout/NavigationBar'
import NavigationCategories from '../NavigationCategories'

function ProductListing() {
  return (
    <>
        <NavigationBar />
        <NavigationCategories />
        <JewelleryCard />
        <Footer />
    </>
  )
}

export default ProductListing