import React from 'react'
import  Navbar  from '../component/Navbar.jsx'
import Carousel  from '../component/Carousel.jsx'
import HomeCards from '../component/HomeCards.jsx'
import HomeProducts from '../component/HomeProducts.jsx'
import HeroContainer from '../component/HeroContainer.jsx'
import HomeBlog from '../component/HomeBlog.jsx'
import Footer from '../component/Footer.jsx'


const Home = () => {
  return (
    <div>
       <Navbar/>
    <Carousel/>
    <HomeCards/>
    <HomeProducts/>
    <Carousel/>
    <HeroContainer/>
    <HomeBlog/>
    <Footer/> 
    </div>
  )
}

export default Home