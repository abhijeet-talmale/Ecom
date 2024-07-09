import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-3">
     <div className="container-fluid"> 
     <div className='d-flex flex-wrap align-items-center justify-content-between'>
        <div>
        <h5 className='mx-4 mt-2 d-inline-block'>Bandage</h5>
        </div>
        <div>
        <ul className="list-unstyled d-inline-block mb-0">
          <li className="d-flex align-items-center">
            <FaFacebook size={24} className="me-2" />
            <FaInstagram size={24} className="me-2" />
            <FaTwitter size={24} />
          </li>
        </ul>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-md-2 mb-3">
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>About Us</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Carrier</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>We are hiring</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>About Us</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Carrier</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>We are hiring</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Business Marketing</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>User Analytic</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Live Chat</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Unlimited Support</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>IOS & Android</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Watch a Demo</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>Customers</a></li>
              <li><a href="#" className='text-decoration-none' style={{color:'rgba(115, 115, 115, 1)'}}>API</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Get In Touch</h5>
            <form>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="mt-3">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="text-center py-3" style={{ backgroundColor: '#f1f1f1' }}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
      </div> 
    </footer>
  );
};

export default Footer;
