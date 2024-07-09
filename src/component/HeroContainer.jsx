import React from 'react'
import Hero from '../assets/Hero/Hero.png' 
const HeroContainer = () => {
  return (
    <div className='container-fluid'>
           <div className="row">
              <div className="col-lg-6 col-12 order-2 order-lg-1">
                   <img src={Hero} alt="Image Not Found" className='img-fluid'/>
              </div>
              <div className="col-lg-6 col-12 m-auto justify-content-center  order-1 order-lg-2">
                <h3 className='p-2' style={{color:"rgba(189, 189, 189, 1)"}}>SUMMER 2020</h3>
                <h1 className='p-2'>Part of the Neural<br/> 
                Universe</h1>
                <h4 className='p-2' style={{color:"rgba(189, 189, 189, 1)"}}>We know how large objects will act, 
                but things on a small scale.</h4>
                <div>
                    <button className='btn btn-success'>BUY NOW</button>
                    <button className='btn btn-outline-success m-3'>READ MORE</button>
                </div>
              </div>
           </div>
    </div>
  )
}

export default HeroContainer