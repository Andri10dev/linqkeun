'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import LogoLinqkeun from '../assets/images/logo-linqkeun-white.png'
import { Link } from "react-scroll";

const Navbar = () => {
    // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //     // first prevent the default behavior
    //     e.preventDefault();
    //     // get the to and remove everything before the hash (#)
    //     const to = e.currentTarget.to;
    //     const targetId = href.replace(/.*\#/, "");
    //     // get the element by id and use scrollIntoView
    //     const elem = document.getElementById(targetId);
    //     elem?.scrollIntoView({
    //         behavior: "smooth",
    //     });
    // };

    const handleScroll = () => {

    }

    const [isCollapse, setIsCollapse] = useState(true);
    const toggleCollapse = () => {
        setIsCollapse(!isCollapse)
    }

    return (
        <>
            <nav className="w-full text-white fixed z-50">
                <div className="bg-custom-blue/80 backdrop-blur-sm w-full h-16 flex items-center justify-between px-5 lg:px-10">
                    <img src={LogoLinqkeun} alt='Logo Linqkeun' className='w-32 aspect-video object-contain'></img>
                    <div className="hidden lg:flex space-x-3 items-center font-semibold">
                        <Link smooth={true} to='welcomeSection' className='cursor-pointer' onClick={handleScroll}>Home</Link>
                        <Link smooth={true} to='aboutUs' className='cursor-pointer' onClick={handleScroll}>About</Link>
                        <Link smooth={true} to="serviceSection" className='cursor-pointer' onClick={handleScroll}>Our Service</Link>
                        <Link smooth={true} to="featureSection" className='cursor-pointer' onClick={handleScroll}>Feature</Link>
                        <Link smooth={true} to="testimonySection" className='cursor-pointer' onClick={handleScroll}>Testimony</Link>
                        {/* <Link to="#portfolioSection" onClick={handleScroll}>Our Team</Link> */}
                        <Link smooth={true} to="footer" className='cursor-pointer' onClick={handleScroll}>Contact</Link>
                    </div>
                    <button type='button' onClick={toggleCollapse} className='lg:hidden flex items-center justify-center text-2xl relative'>
                        <FontAwesomeIcon icon={faBars} className={isCollapse ? 'scale-100 rotate-0 transition-all duration-500' : 'scale-0 rotate-180 transition-all duration-300'} />
                        <FontAwesomeIcon icon={faClose} className={isCollapse ? 'absolute scale-0 -rotate-180 transition-all duration-300' : 'absolute scale-100 text-red-500 rotate-0 transition-all duration-500'} />
                    </button>
                </div>
                <div className={isCollapse ? 'w-full h-0 px-5 flex flex-col items-center space-y-3 overflow-hidden transition-all duration-700 rounded-b-2xl bg-custom-blue/90 backdrop-blur-sm' : 'lg:hidden w-full px-5 flex flex-col items-center space-y-3 h-72 transition-all duration-700 overflow-hidden rounded-b-2xl bg-custom-blue/90 backdrop-blur-sm'}>
                    <div className='w-full h-1 bg-white rounded-full mb-3'></div>
                    <Link smooth={true} to="welcomeSection" className='cursor-pointer' onClick={handleScroll}>Home</Link>
                    <Link smooth={true} to="aboutUs" className='cursor-pointer' onClick={handleScroll}>About</Link>
                    <Link smooth={true} to="serviceSection" className='cursor-pointer' onClick={handleScroll}>Service</Link>
                    <Link smooth={true} to="featureSection" className='cursor-pointer' onClick={handleScroll}>Feature</Link>
                    <Link smooth={true} to="testimonySection" className='cursor-pointer' onClick={handleScroll}>Testimony</Link>
                    {/* <Link href="#portfolioSection" onClick={handleScroll}>Our Team</Link> */}
                    <Link smooth={true} to="footer" className='cursor-pointer' onClick={handleScroll}>Contact</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar