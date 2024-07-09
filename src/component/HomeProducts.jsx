import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const truncateTitle = (title) => {
    return title.length > 50 ? title.substring(0, 50) + '...' : title;
  };

  return (
    <div className='container-fluid'>
      <h2 className='text-center'>Featured Products</h2>
      <h1 className='text-center'><b>BESTSELLER PRODUCTS</b></h1>
      <p className='text-center'>Problems trying to resolve the conflict between </p>

      <div className='mt-5'>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="row">
            {
              products.map((productData, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                    <div className="card text-center" style={{width: "100%", height: "100%"}}>
                      <img src={productData.image} className="card-img-top img-fluid" style={{width: '100%', height: '100%'}}  alt={productData.title}/>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{truncateTitle(productData.title)}</h5>
                        <h5 style={{color:'rgba(35, 133, 109, 1)'}}>Price: ${productData.price}</h5>
                        <div className="mt-auto">
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button className='btn btn-sm m-1 rounded-circle' style={{backgroundColor:'rgba(35, 166, 240, 1)', color:'rgba(35, 166, 240, 1)'}}>1</button>
                            <button className='btn btn-sm m-1 rounded-circle' style={{backgroundColor:'rgba(35, 133, 109, 1)', color:'rgba(35, 133, 109, 1)'}}>1</button>
                            <button className='btn btn-sm m-1 rounded-circle' style={{backgroundColor:'rgba(231, 124, 64, 1)', color:'rgba(231, 124, 64, 1)'}}>1</button>
                            <button className='btn btn-sm m-1 rounded-circle' style={{backgroundColor:'rgba(37, 43, 66, 1)', color:'rgba(37, 43, 66, 1)'}}>1</button>
                          </div>
                          <br />
                          <Link to={`/product/${productData.id}`} className="btn btn-primary mt-2">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProducts;
