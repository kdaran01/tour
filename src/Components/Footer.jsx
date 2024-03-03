import React, {useEffect} from 'react'
import './Footer.css'
import video from '../assets/bgTwo.mp4'
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
    
  },[])



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us..</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder='Enter your Queries' />
            <button className="btn flex">
               SEND <IoIosSend className='icon' />
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
               <MdTravelExplore className='icon' />
               TRAVEL.
              </a>
            </div>
            <div className="footerParagraph">
            “Travel is the main thing you purchase that makes you more extravagant”. We swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
            We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.
            </div>
            <div className="footerSocial flex">
              <FaXTwitter className='icon'/>
              <FaInstagram className="icon"/>
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer