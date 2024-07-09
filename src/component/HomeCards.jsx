import React from 'react'
import Img1 from '../assets/Card/f1.png'
import Img2 from '../assets/Card/f2.png'
import Img3 from '../assets/Card/f3.png'
import Img4 from '../assets/Card/f4.png'
const HomeCards = () => {
  return (
    <div className='container p-2'>
        <h2 className='text-center m-3'><b>EDITOR’S PICK</b></h2>
        <p className='text-center'>Problems trying to resolve the conflict between </p>
             <div class="container text-center">
  <div class="row ">
    <div class="col-lg-6 col-12 p-2 position-relative">
      <img src={Img1} alt="Image not Found " className='img-fluid' />
      <div class="position-absolute top-50 start-50 p-3 translate-middle text-center text-white">
    <h1 className='text-dark bg-white p-3'>Men</h1>
  </div>
    </div>
    <div class="col-lg-3 col-12 p-2 position-relative">
    <img src={Img2} alt="Image not Found "  className='img-fluid'/>
    <div class="position-absolute top-50 start-50 p-3 translate-middle text-center text-white">
    <h1 className='text-dark bg-white p-3'>Women</h1>
  </div>
    </div>
    <div class="col-lg-3 col-12 row-cols-2 p-2">
    <div className='col-lg-12 col-12 p-2 position-relative'>
    <img src={Img3} alt="Image not Found " className='img-fluid' />
    <div class="position-absolute top-50 start-50 p-3 translate-middle text-center text-white">
    <h3 className='text-dark bg-white p-3'>Accessories</h3>
  </div>
    </div>
    <div className='col-lg-12 col-12 p-2 position-relative'>
    <img src={Img4} alt="Image not Found " className='img-fluid' />
    <div class="position-absolute top-50 start-50 p-3 translate-middle text-center text-white">
    <h1 className='text-dark bg-white p-3'>Kids</h1>
  </div>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default HomeCards