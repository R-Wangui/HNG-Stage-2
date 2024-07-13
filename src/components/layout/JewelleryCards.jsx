import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { fetchProducts } from '../../utils/TimbuApi';
import { Button, Pagination } from 'react-bootstrap';
import '../styles/JewelleryCard.css'
import { Link } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';

function JewelleryCards() {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]); 
  const productsPerPage = 12;
  
  const apiUrl = "http://localhost:5173/api/products?organization_id=4619045cc539400cb5e19f32ca89b878&Appid=C4MVEF2CYXJEM9O&Apikey=e826c4ab4dd34acaa7daf4eca506521e20240712181104614655";
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl,
          {
            params: {
              currency_code: "KSH",
              reverse_sort: false,
              page: 2,
              size: 12,
            },
          }
          
        );
        
        // console.log(response)
        if (response.data && Array.isArray(response.data.items)) {
          setProducts(response.data.items);
          setIsEmpty(response.data.items.length === 0);
        } else {
          console.error("Unexpected API response structure", response.data);
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts(page);
  }, [page]);

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  // Check if a product is in the cart
  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };


//   const formatPrice = (currentPrice) => {
//     if (currentPrice && currentPrice.KSH && currentPrice.KSH[0]) {
//         return `${currentPrice.KSH[0]} KSH`;
//     }
//     return "Price not available";
// };

  // const priceDisplay = product?.current_price
  //   ? formatPrice(product.current_price)
  //   : "Price not available";

  // Checks if a product is in the cart
  // const isInCart = (product) => {
  //   return cart.some((item) => item.id === product.id);
  // };

  return (
    <>
      
      {/* <h1 className='jewelleryCardsH1'>Product List</h1> */}
      
        <div className='jewelleryCards'>
          {products.map((product) => (
            <div key={product.id} className='productCard'>
              <Link to="/productdetails">
                <div>
                  <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name} />
                  <i class="bi bi-heart"
                  ></i>
                </div>
              </Link>
              <div className='productDescription'>
                <div>
                  <p>{product.name}</p>
                  <h5>
                  {/* {product.current_price[0]['KSH'][0]} */}
                  {product?.current_price?.KSH ? `${product.current_price[0].KSH[0]} Ksh` : "Price not available"}
                  </h5>
                </div>
                <Button className='productCardButton' 
                  onClick={() => addToCart(product)} disabled={isInCart(product)}
                  >
                  {isInCart(product) ? "ADDED" : "ADD"}
                </Button>   
                </div>
            </div>
          ))}
        </div>
        <PaginationComponent />
      

    </>
  )
}

export default JewelleryCards