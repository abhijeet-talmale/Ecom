import React from 'react'
import Contact from '../../assets/Contact/Contact.png'
import Contact1 from '../../assets/Contact/Contact1.png'
import Contact2 from '../../assets/Contact/Contact3.png'
import Tweeter from '../../assets/Contact/tweeter.png'
import Fb from '../../assets/Contact/Fb.png'
import Insta from '../../assets/Contact/Insta.png'
import Link from '../../assets/Contact/Link.png'
const Contacts = () => {
  return (
    <div>
        <div className='continer-fluid text-center'>
            <h2 style={{color:'rgba(37, 43, 66, 1)'}}>Get answers to all your <br/>
            questions.</h2>
            <p style={{color:'rgba(115, 115, 115, 1)'}}>Problems trying to resolve the conflict between the two <br/>major realms of Classical physics: </p>
            <button className='btn btn-primary'>CONTACT OUR COMPANY</button>

            <table className='m-auto mt-2'>
              <tr>
                <td className="p-2">
                  <img src={Tweeter} alt="Image Not Found " />
                </td>
                <td className="p-2">
                  <img src={Fb} alt="Image Not Found " />
                </td>
                <td className="p-2">
                  <img src={Insta} alt="Image Not Found " />
                </td>
                <td className="p-2">
                  <img src={Link} alt="Image Not Found " />
                </td>
              </tr>
            </table>
        </div>
        <div className='text-center'
              style={

                {
                  backgroundImage: `url(${Contact})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '50px 0'
                }
              }
        
        >
          <h1 style={{color:'rgba(37, 43, 66, 1)'}}>Questions & Answers</h1>
          <p style={{color:'rgba(115, 115, 115, 1)'}}>Problems trying to resolve the conflict between the two<br/> major realms of Classical physics: </p>
          <h6 style={{color:'rgba(35, 166, 240, 1)'}}>CONTACT US</h6>
        </div>

        <div className='container-fluid p-5'
                  style={

                    {
                      backgroundImage: `url(${Contact1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                     
                    }
                  }
        >
             <div className='row text-white mt-5 '>
                  <div className="col-lg-4 col-12 text-center ">
                       <h1>CONTACT US</h1>
                       <p>Problems trying to resolve the conflict between 
                       the two major realms of Classical physics: 
                       Newtonian mechanics </p>
                       <button className='btn btn-primary'>CONTACT US</button>
                  </div>
                  <div className="col-lg-8 col-12 text-center ">
                  <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Paris</h5>
          <p>1901 Thorn ridge Cir.</p>
          <hr style={{width: '50px', borderColor: '#00BFFF', borderWidth: '2px'}} />
          <p>75000 Paris</p>
          <p>Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
        </div>
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Berlin</h5>
          <p>4140 Parker Rd.</p>
          <hr style={{width: '50px', borderColor: '#00BFFF', borderWidth: '2px'}} />
          <p>75000 Berlin</p>
          <p>Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Paris</h5>
          <p>1901 Thorn ridge Cir.</p>
          <hr style={{width: '50px', borderColor: '#00BFFF', borderWidth: '2px'}} />
          <p>75000 Paris</p>
          <p>Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
        </div>
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Berlin</h5>
          <p>4140 Parker Rd.</p>
          <hr className='m-auto' style={{width: '50px', borderColor: '#00BFFF', borderWidth: '2px'}} />
          <p>75000 Berlin</p>
          <p>Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
        </div>
      </div>
    </div>
                  </div>
             </div>
        </div>

        <div>
          <div className='container-fluid'>
          <div className="row">
            <div className="col-12 col-lg-6 bg-primary text-white">
            <div className="container text-center p-5">
      <h6 className="fw-bold text-uppercase">Work With Us</h6>
      <h1 className="fw-bold mt-3">Now Let's grow Yours</h1>
      <p className="mt-3">
        The gradual accumulation of information about atomic and small-scale behavior 
        during the first quarter of the 20th
      </p>
      <button className="btn btn-outline-light mt-4">Button</button>
    </div>
            </div>
            <div className="col-12 col-lg-6"
                 style={

                  {
                    backgroundImage: `url(${Contact2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                   
                  }
                }
            >
              
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contacts