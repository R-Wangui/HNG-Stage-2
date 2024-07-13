import axios from "axios";

//   Store your API URL endpoint of Timbu store in a const variable by importing it from the .env file
const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_API_KEY;
const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;

console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_KEY:', API_KEY);
console.log('ORGANIZATION_ID:', ORGANIZATION_ID);


const timbuApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
//   Initiate an asynchronous operation to fetch data from the API endpoint of Timbu store
export const fetchProducts = async () => {
  try {
  const response = await timbuApi.get(`/products?organization_id=${ORGANIZATION_ID}&Apikey=${API_KEY}`);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};

export default timbuApi;