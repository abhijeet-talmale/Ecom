import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
<>
    <Navbar/>
    <div className='container'>
      <h2 className='text-center'>Name:{product.title}</h2>
      <img src={product.image} className='img-fluid d-block mx-auto border-primary' alt={product.title} height="200" width="200" />
      <p><b>Description</b>:{product.description}</p>
      <h5 style={{color: 'rgba(35, 133, 109, 1)'}}>Price: ${product.price}</h5>
      <button className='btn btn-primary'>Buy Now</button>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetails;
