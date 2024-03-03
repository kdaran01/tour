import React, { useEffect } from 'react'
import './Home.css'
import { FaFilter } from "react-icons/fa";
import videoo from '../assets/bgOne.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
    
  },[])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={videoo} muted autoPlay loop typeof='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 data-aos="fade-right" className="homeTitle">We will make PLANS,</h1>
          <h1 data-aos="fade-right" className="homeTitle">You will make MEMORIES.</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your Destination</label>
              <div className="input flex">
                <input type="text" placeholder='Enter city name' />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Select your Travel Date</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price : </label>
                <h3 className="total">Rs. 50000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>
            <div className="searchOptions flex">
               <FaFilter className='icon' />
               <span>MORE FILTERS</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home