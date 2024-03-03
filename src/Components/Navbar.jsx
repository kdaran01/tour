import React, { useState } from 'react'
import './Navbar.css'
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

    const [active,setActive] =  useState('navBar');
    const showNav = () =>{
        active === 'navBar' ? setActive('navBar activeNavBar') : setActive('navBar')
    }



  return (
    <section className='navbarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className='logo flex'>
                    <h1>TRAVEL.</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItems">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLink">Packages</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLink">Pages</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLink">Contact</a>
                    </li>  
                    <button className="btn"><a href="#">BOOK NOW</a></button>  
                </ul>
               <div onClick={showNav} className="closeNavbar">
                  <IoIosCloseCircle className='icon' />
               </div>
            </div>

            <div onClick={showNav}  className="toggleNavBar">
               <TbGridDots className="icon" />
            </div>

        </header>
    </section>
  )
}

export default Navbar