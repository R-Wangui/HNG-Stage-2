import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { fetchProducts } from '../../utils/TimbuApi';
import { Button } from 'react-bootstrap';
import '../styles/JewelleryCard.css'
import { Link } from 'react-router-dom';

function JewelleryCards() {

  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const apiUrl = "http://localhost:5173/api/products?organization_id=4619045cc539400cb5e19f32ca89b878&Appid=C4MVEF2CYXJEM9O&Apikey=e826c4ab4dd34acaa7daf4eca506521e20240712181104614655";
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log(response)
        if (response.data && Array.isArray(response.data.items)) {
          setProducts(response.data.items);
        } else {
          console.error("Unexpected API response structure", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      
      <h1>Product List</h1>
      <Link to="/productdetails">
        <div className='jewelleryCards'>
          {products.map((product) => (
            <div key={product.id} className='productCard'>
              <img src={'http://api.timbu.cloud/images/'+product.photos[0].url} alt={product.name} />
              <i class="bi bi-heart"
              ></i>
              <div className='productDescription'>
                <div>
                  <p>{product.name}</p>
                  <h5>{product.price}</h5>
                </div>
                <Button className='productCardButton'>ADD</Button>
                </div>
            </div>
          ))}
        </div>
      </Link>

    </>
  )
}

export default JewelleryCards