import React from 'react'
import Blog from '../assets/HomeBlog/Blog.png'
import Blog1 from '../assets/HomeBlog/Blog1.png'
import Blog2 from '../assets/HomeBlog/Blog2.png'
import Clock from '../assets/HomeBlog/coolicon.png'
import Comment from '../assets/HomeBlog/comment.png'
import Arrow from '../assets/HomeBlog/arrow.png'
const HomeBlog = () => {
  return (
    <div className='container-fluid mt-5'>
          <h6 className='text-center mt-3' style={{color:'rgba(35, 166, 240, 1)'}}>
               Practice Advice
          </h6 >
          <h1 className='text-center mt-3' style={{color:'rgba(37, 43, 66, 1)'}}>Featured Posts</h1>
          <p  className='text-center mt-3' style={{color:'rgba(115, 115, 115, 1)'}} >Problems trying to resolve the conflict between <br/>
          the two major realms of Classical physics: Newtonian mechanics </p>

          <div className='container'>
            <div className="row">
                <div className="col-lg-4 col-12 col-md-12 w-100">
                <div class="card" style={{width: "18rem"}}>
  <img src={Blog} class="card-img-top" alt="..."/>
  <div class="card-body">
  <table>
          <tr>
            <td className='p-3'><a href="">Google</a></td>
            <td className='p-3'>Trending</td>
            <td className='p-3'>New</td>
          </tr>
  </table>
  <h5>Loudest à la Madison #1 <br/>
  (L'integral)</h5>
  <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>

<div className="d-flex">
      <div className="d-flex align-items-center mr-3 ">
        <img src={Clock} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">22 Apr 2021</p>
      </div>
      <div className="d-flex align-items-center mx-3">
        <img src={Comment} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">10 Comments</p>
      </div>
    </div>
   <div className="mt-3">
    <a href="#" className='text-decoration-none '>Learn More &nbsp; &nbsp;<img src={Arrow} alt="IMage Not Found" /></a>
    </div>
  </div>
</div>
                </div>


                <div className="col-lg-4 col-12 col-md-12 w-100">
                <div class="card" style={{width: "18rem"}}>
  <img src={Blog1} class="card-img-top" alt="..."/>
  <div class="card-body">
  <table>
          <tr>
            <td className='p-3'><a href="">Google</a></td>
            <td className='p-3'>Trending</td>
            <td className='p-3'>New</td>
          </tr>
  </table>
  <h5>Loudest à la Madison #1 <br/>
  (L'integral)</h5>
  <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>

<div className="d-flex">
      <div className="d-flex align-items-center mr-3">
        <img src={Clock} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">22 Apr 2021</p>
      </div>
      <div className="d-flex align-items-center mx-3">
        <img src={Comment} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">10 Comments</p>
      </div>
    </div>
   <div className="mt-3">
    <a href="#" className='text-decoration-none '>Learn More &nbsp; &nbsp;<img src={Arrow} alt="IMage Not Found" /></a>
    </div>
  </div>
</div>
                </div>

                <div className="col-lg-4 col-12 col-md-12 w-100">
                <div class="card" style={{width: "18rem"}}>
  <img src={Blog2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <table>
          <tr>
            <td className='p-3'><a href="">Google</a></td>
            <td className='p-3'>Trending</td>
            <td className='p-3'>New</td>
          </tr>
  </table>
  <h5>Loudest à la Madison #1 <br/>
  (L'integral)</h5>
  <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>

<div className="d-flex">
      <div className="d-flex align-items-center mr-3">
        <img src={Clock} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">22 Apr 2021</p>
      </div>
      <div className="d-flex align-items-center mx-3">
        <img src={Comment} alt="Image Not Found" className="mr-2" />
        <p className="mb-0">10 Comments</p>
      </div>
    </div>
   <div className="mt-3">
    <a href="#" className='text-decoration-none '>Learn More &nbsp; &nbsp;<img src={Arrow} alt="IMage Not Found" /></a>
    </div>
  </div>
</div>
                </div>
            </div>
          
          
          
          </div>

         
    </div>
  )
}

export default HomeBlog