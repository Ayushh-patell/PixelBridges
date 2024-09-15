"use client";

import React, { useEffect, useState } from 'react'
import { mont } from '../layout';
import Image from 'next/image';
import topBar from '../PixelBridges/topBar.png'
import topBar2 from '../PixelBridges/topBar2.png'
import gsap from 'gsap';

const NavBar = () => {
    const [currTab, setcurrTab] = useState(0);

    useEffect(() => {
      if(currTab === 0) {
        gsap.set("#ExpertiseScreen", {pointerEvents:"none"});
        gsap.set("#AboutScreen", {pointerEvents:"none"});
        gsap.set("#HomeScreen", {pointerEvents:"all"});
        
        gsap.to("#ExpertiseScreen", {opacity:0, duration:0.7});
        gsap.to("#AboutScreen", {opacity:0, duration:0.7});
        gsap.to("#HomeScreen", {opacity:1, duration:0.7});
        
        gsap.to("#TopBar", {opacity:window.innerWidth>768?1:0.66})
        gsap.to("#lightTopBar", {opacity:0})
        gsap.to("#opacityTopBar", {opacity:0})
        }
        if(currTab === 1) {
            gsap.set("#AboutScreen", {pointerEvents:"none"});
            gsap.set("#HomeScreen", {pointerEvents:"none"});
            gsap.set("#ExpertiseScreen", {pointerEvents:"all"});

            gsap.to("#AboutScreen", {opacity:0, duration:0.7});
            gsap.to("#HomeScreen", {opacity:0, duration:0.7});
            gsap.to("#ExpertiseScreen", {opacity:1, duration:0.7});

            gsap.to("#TopBar", {opacity:window.innerWidth>768?1:0.66})
            gsap.to("#opacityTopBar", {opacity:0})
            gsap.to("#lightTopBar", {opacity:0})
            if(document.getElementById("ExpertiseScreen").getAttribute("data-isleft") === "1" && window.innerWidth>768) {
              gsap.to("#TopBar", {opacity:0})
              gsap.to("#opacityTopBar", {opacity:0})
              gsap.to("#lightTopBar", {opacity:1})
            }
          }
          if(currTab === 2) {
            gsap.set("#ExpertiseScreen", {pointerEvents:"none"});
            gsap.set("#HomeScreen", {pointerEvents:"none"});
            gsap.set("#AboutScreen", {pointerEvents:"all"});
            
            gsap.to("#ExpertiseScreen", {opacity:0, duration:0.7});
            gsap.to("#HomeScreen", {opacity:0, duration:0.7});
            gsap.to("#AboutScreen", {opacity:1, duration:0.7});

            gsap.to("#opacityTopBar", {opacity:0.66})
            gsap.to("#lightTopBar", {opacity:0})
            gsap.to("#TopBar", {opacity:0})
        }
    },[currTab])

  return (
    <header className=' relative z-50 flex w-full 1xl:px-16 lg:px-12 sm1:px-7 px-0 justify-end items-center'>
    {/* TOP RIGHT BAR FOR NAV */}
    <Image src={topBar} id='TopBar' aria-hidden alt='top bar' className=' pointer-events-none fixed z-[-5] xl:w-[45vw] lg:w-[50vw] md:w-[60vw] sm3:w-[75vw] w-[90vw] object-contain object-right-top top-0 right-0'/>
    <Image src={topBar2} id='lightTopBar' aria-hidden alt='top bar' className=' pointer-events-none fixed z-[-4] xl:w-[45vw] lg:w-[50vw] md:w-[60vw] sm3:w-[75vw] w-[90vw] object-contain object-right-top top-0 right-0 opacity-0 md:block hidden'/>
    <Image src={topBar} id='opacityTopBar' aria-hidden alt='top bar' className=' pointer-events-none fixed z-[-4] xl:w-[45vw] lg:w-[50vw] md:w-[60vw] sm3:w-[75vw] w-[90vw] object-contain object-right-top top-0 right-0 opacity-0'/>
      <nav className={` flex justify-between items-center 1xl:gap-20 lg:gap-14 gap-8 lg:text-lg md:text-base sm1:text-sm sm4:text-xs text-[10px] ${mont.className}`}>
        <button onClick={() => setcurrTab(0)} className={` px-1 pb-0 font-bold sm:border-b-4 border-b-[3px] ${currTab===0? " border-mainBg text-white":" border-transparent text-white/40"} `}>Home</button>
        <button onClick={() => setcurrTab(1)} className={` px-1 pb-0 font-bold sm:border-b-4 border-b-[3px] ${currTab===1? " border-mainBg text-white":" border-transparent text-white/40"} `}>Expertise</button>
        <button onClick={() => setcurrTab(2)} className={` px-1 pb-0 font-bold sm:border-b-4 border-b-[3px] ${currTab===2? " border-mainBg text-white":" border-transparent text-white/40"} `}>About</button>
      </nav>
      {/* WHITE BORDER ON SCREEN  */}
    <div className=' sm1:w-[calc(100vw-30px)] w-[calc(100vw-15px)] sm1:h-[calc(100dvh-30px)] h-[calc(100dvh-15px)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-2 border-white/25'/>
    </header>
  );
};

export default NavBar
