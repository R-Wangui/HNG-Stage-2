import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { fetchProducts } from '../../utils/TimbuApi';
import { Button, Pagination } from 'react-bootstrap';
import '../styles/JewelleryCard.css'
import { Link } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';
import { useCart } from '../../CartContext';

function JewelleryCards() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  
  
  const apiUrl = import.meta.env.VITE_TIMBU_API;
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl,
          {
            params: {
              currency_code: "KES",
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

  // Function for pagination
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
// Function for add to cart
  const handleAddToCart = (product) => {
    const newProduct = { id: product.id, name: product.name, price: product.current_price[0].KES[0] };
    addToCart(newProduct);
  };
  // Checks if a product is in the cart
  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <>
      
      {/* <h1 className='jewelleryCardsH1'>Product List</h1> */}
      
        <div className='jewelleryCards'>
          {products.map((product) => (
            <div key={product.id} className='productCard'>
              <Link to={"/productdetails/" + product.id} >
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
                   Ksh. {product.current_price[0].KES?.[0]||null}
                  {/* {product.current_price[0]['KSH'][0]}*/}
                  {/* {product?.current_price?.KSH ? `${product.current_price[0].KSH[0]} Ksh` : "Price not available"} */}
                  </h5>
                </div>
                <Button className='productCardButton' 
                  onClick={() => handleAddToCart(product)} 
                  disabled={isInCart(product)}
                  >
                  {isInCart(product) ? "ADDED" : "ADD"}
                </Button>   
                </div>
            </div>
          ))}
        </div>
        <PaginationComponent 
        onClick={() => handleNextPage()} />
      

    </>
  )
}

export default JewelleryCards