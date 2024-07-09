import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import c1 from '../assets/Carousel/c1.jpg';
import c2 from '../assets/Carousel/c2.jpg';
import c3 from '../assets/Carousel/c3.jpg';


const About = () => {
  return (
    <>
    <Navbar/>
    <div className='container my-5'>
      <h1 className='text-center mb-4'>About Us</h1>
      <p className='text-center mb-5'>Learn more about our company, our values, and our mission.</p>
      
      <div className='row mb-5'>
        <div className='col-md-6'>
          <h2>Our Story</h2>
          <p>Our e-commerce journey began in [Year] with a mission to provide quality products to customers worldwide. We started as a small business with a big dream, and over the years, we have grown to become a trusted name in the industry.</p>
        </div>
        <div className='col-md-6'>
          <img src={c1} className='img-fluid rounded' alt='Our Story' />
        </div>
      </div>
      
      <div className='row mb-5'>
        <div className='col-md-6 order-md-2'>
          <h2>Our Mission</h2>
          <p>Our mission is to deliver high-quality products at competitive prices while providing exceptional customer service. We strive to innovate and continuously improve to meet the evolving needs of our customers.</p>
        </div>
        <div className='col-md-6 order-md-1'>
          <img src={c2} className='img-fluid rounded' alt='Our Mission' />
        </div>
      </div>
      
      <div className='row mb-5'>
        <div className='col-md-6'>
          <h2>Our Values</h2>
          <p>We believe in integrity, transparency, and customer satisfaction. Our core values guide everything we do, from product sourcing to customer interactions.</p>
        </div>
        <div className='col-md-6'>
          <img src={c3} className='img-fluid rounded' alt='Our Values' />
        </div>
      </div>
      
      <div className='row'>
        <div className='col-md-6 order-md-2'>
          <h2>Meet the Team</h2>
          <p>Our team is composed of dedicated professionals who are passionate about what they do. We work together to ensure that every aspect of our business meets the highest standards.</p>
        </div>
        <div className='col-md-6 order-md-1'>
          <img src={c1} className='img-fluid rounded' alt='Our Team' />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
