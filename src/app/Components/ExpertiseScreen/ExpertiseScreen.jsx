"use client";

import { bebas } from '@/app/layout'
import React, { useEffect, useState } from 'react'
import LeftCarousel from './LeftCarousel'
import RightCarousel from './RightCarousel'
import gsap from 'gsap';
import Image from 'next/image';
import arrow from "../../PixelBridges/arrow.png"
import { CustomEase } from 'gsap/all';

const leftCarouselTexts = ["New Name and Identity", "Modern Themes & Visuals", "Enhanced User Experience", "Fully Responsive & Mobile Friendly"]
const rightCarouselTexts = ["Custom Design & Coding", "E-commerce Integration", "SEO Optimized", "Scalable & Secure"]

const ExpertiseScreen = () => {

  const [isLeftOn, setisLeftOn] = useState(true);
  const [leftCurrSlide, setleftCurrSlide] = useState(0);
  const [rightCurrSlide, setrightCurrSlide] = useState(0);
  gsap.registerPlugin(CustomEase)

  // ANIMATION FOR LEFT RIGHT CAROUSEL POSITION
  useEffect(() => {
    if(window.innerWidth>768) {
      if(isLeftOn) {
        gsap.to("#centerText", {xPercent:0, duration:0.9})
        gsap.to("#leftCarousel", {left:0, opacity:1, duration:1, ease:'power2.out'})
        gsap.to("#rightCarousel", {right:"-100%" ,opacity:0, duration:1, ease:'none'})
      }
      else {
        gsap.to("#centerText", {xPercent:-54, duration:0.9})
        gsap.to("#leftCarousel", {left:"-100%", opacity:0, duration:1, ease:'none'})
        gsap.to("#rightCarousel", {right:0, opacity:1, duration:1, ease:'power2.out'})
      }
    }
    else {
      if(isLeftOn) {
        gsap.set("#leftCarousel", {pointerEvents:"all"})
        gsap.set("#rightCarousel", {pointerEvents:"none"})

        
        gsap.to("#rightCarousel", {opacity:0, duration:0.7, ease:'none'})
        gsap.to("#centerTextLeftHeading", { translateY:"100%", opacity:0, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextLeftHeading", { scale:0.8, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextLeftPara", { translateY:"-60%", opacity:0, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextLeftPara", {scale:0.9, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextLeftBox", { scale:0.3, duration:0.2, ease:'power1.in'})

        gsap.to("#leftCarousel", { opacity:1, duration:0.6, ease:'none', delay:0.3})
        gsap.to("#centerTextRightHeading", { scale:1, translateY:0, opacity:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.3})
        gsap.to("#centerTextRightPara", { translateY:0, scale:1, opacity:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.3})
        gsap.to("#centerTextRightBox", { scale:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.4})
      }
      else {
        gsap.set("#leftCarousel", {pointerEvents:"none"})
        gsap.set("#rightCarousel", {pointerEvents:"all"})


        gsap.to("#leftCarousel", { opacity:0, duration:0.7, ease:'none'})
        gsap.to("#centerTextRightHeading", { translateY:"100%", opacity:0, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextRightHeading", { scale:0.8, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextRightPara", { translateY:"-60%", opacity:0, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextRightPara", {scale:0.9, duration:0.2, ease:'power1.in'})
        gsap.to("#centerTextRightBox", { scale:0.3, duration:0.2, ease:'power1.in'})

        gsap.to("#rightCarousel", { opacity:1, duration:0.6, ease:'none', delay:0.3})
        gsap.to("#centerTextLeftHeading", { scale:1, translateY:0, opacity:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.3})
        gsap.to("#centerTextLeftPara", { translateY:0, scale:1, opacity:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.3})
        gsap.to("#centerTextLeftBox", { scale:1, duration:0.7, ease:CustomEase.create("custom", "M0,0 C0.194,0 0.525,1.097 0.675,1.098 0.856,1.098 0.94,1.018 1,1 "), delay:0.4})
      }
    }
    

    // UPDATE THE TOPBAR   
    if(isLeftOn && document.getElementById("ExpertiseScreen").getAttribute("data-isleft") === "0" && window.innerWidth>768) {
      gsap.to("#TopBar", {opacity:0})
      gsap.to("#opacityTopBar", {opacity:0})
      gsap.to("#lightTopBar", {opacity:1})
      document.getElementById("ExpertiseScreen").setAttribute("data-isleft", "1")
    }
    if(!isLeftOn && document.getElementById("ExpertiseScreen").getAttribute("data-isleft") === "1") {
      gsap.to("#TopBar", {opacity:1})
      gsap.to("#opacityTopBar", {opacity:0})
      gsap.to("#lightTopBar", {opacity:0})
      document.getElementById("ExpertiseScreen").setAttribute("data-isleft", "0")
    }
    if(!isLeftOn && window.innerWidth<768) {
      gsap.to("#TopBar", {opacity:0.66})
      gsap.to("#opacityTopBar", {opacity:0})
      gsap.to("#lightTopBar", {opacity:0})
    }

    // RESET BOTH CAROUSEL TO START TO PREVENT BUGS

    setleftCurrSlide(0)
    setrightCurrSlide(0)
  },[isLeftOn])

  useEffect(() => {
    if(leftCurrSlide<4) {
      document.querySelectorAll(".leftCarouselItem").forEach((item) => gsap.to(item, {translateX:`${-100*leftCurrSlide}%`, duration:1}))
    }

    if(leftCurrSlide===0) {
      document.getElementById("leftCarouselLeftButton").style.backgroundColor = "transparent"
      document.getElementById("leftCarouselLeftBtnimg").style.filter = "invert(0)"

      document.getElementById("leftCarouselRightButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("leftCarouselRightBtnimg").style.filter = "invert(1)"
    }
    if(leftCurrSlide>=3) {
      document.getElementById("leftCarouselRightButton").style.backgroundColor = "transparent"
      document.getElementById("leftCarouselRightBtnimg").style.filter = "invert(0)"

      document.getElementById("leftCarouselLeftButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("leftCarouselLeftBtnimg").style.filter = "invert(1)"
    }
    if(leftCurrSlide!==0 && leftCurrSlide<3) {
      document.getElementById("leftCarouselLeftButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("leftCarouselLeftBtnimg").style.filter = "invert(1)"
      document.getElementById("leftCarouselRightButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("leftCarouselRightBtnimg").style.filter = "invert(1)"

    }

    // CHANGING THE CAROUSEL TEXT ACCORDING TO THE SLIDE
    document.getElementById("leftcarouselText").innerText = leftCarouselTexts[leftCurrSlide]
  },[leftCurrSlide])
  
  const handleleftCarouselLeftBtn = () => {
    if(leftCurrSlide>0) {
      setleftCurrSlide((prev) => prev-1)
    }
  }
  const handleleftCarouselRightBtn = () => {
    if(leftCurrSlide<3) {
      setleftCurrSlide((prev) => prev+1)
    }
  }


  useEffect(() => {
    if(rightCurrSlide<4) {
      document.querySelectorAll(".rightCarouselItem").forEach((item) => gsap.to(item, {translateX:`${-100*rightCurrSlide}%`, duration:1}))
    }
    
    if(rightCurrSlide===0) {
      document.getElementById("rightCarouselLeftButton").style.backgroundColor = "transparent"
      document.getElementById("rightCarouselLeftBtnimg").style.filter = "invert(0)"
      
      document.getElementById("rightCarouselRightButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("rightCarouselRightBtnimg").style.filter = "invert(1)"
    }
    if(rightCurrSlide>=3) {
      document.getElementById("rightCarouselRightButton").style.backgroundColor = "transparent"
      document.getElementById("rightCarouselRightBtnimg").style.filter = "invert(0)"
      
      document.getElementById("rightCarouselLeftButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("rightCarouselLeftBtnimg").style.filter = "invert(1)"
    }
    if(rightCurrSlide!==0 && rightCurrSlide<3) {
      document.getElementById("rightCarouselLeftButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("rightCarouselLeftBtnimg").style.filter = "invert(1)"
      document.getElementById("rightCarouselRightButton").style.backgroundColor = "#d9d9d9"
      document.getElementById("rightCarouselRightBtnimg").style.filter = "invert(1)"
      
    }
    
    // CHANGING THE CAROUSEL TEXT ACCORDING TO THE SLIDE
    document.getElementById("rightcarouselText").innerText = rightCarouselTexts[rightCurrSlide]
  },[rightCurrSlide])

  const handlerightCarouselLeftBtn = () => {
    if(rightCurrSlide>0) {
      setrightCurrSlide((prev) => prev-1)
    }
  }
  const handlerightCarouselRightBtn = () => {
    if(rightCurrSlide<3) {
      setrightCurrSlide((prev) => prev+1)
    }
  }


  return (
    <main id='ExpertiseScreen' data-isleft={'1'} className=' w-full h-full opacity-0 pointer-events-none absolute top-0 left-0'>

    <LeftCarousel/>

    <div id='centerText' className=' h-full md:w-[65%] w-full fixed top-0 right-0 z-10'>

<div id='centerTextRight' className={` ${isLeftOn? " opacity-100 pointer-events-auto":" md:opacity-0 opacity-100 pointer-events-none"} transition-opacity duration-700 flex flex-col justify-between items-center w-full h-full p-10 md:pt-40 pt-[40dvh] xl1:pl-44 md:pl-32 md:bg-[#110E17F7] bg-[#110E17] `}>

<div>
        <button onClick={() => setisLeftOn((prev) => !prev)} className={` md:h-[14px] h-2 lg1:w-1/2 md:w-2/3 w-4/5 rounded-full bg-[#d9d9d9]/10 flex justify-start items-center mb-12 mx-auto`}>
          <div className={`  rounded-full h-full ${isLeftOn?" bg-[#B896FF] translate-x-0 w-1/2 opacity-100":" bg-[#5E81FF] md:translate-x-32 translate-x-[150%] opacity-0 w-1/4"} transition-all duration-500 ease-in-out`}></div>
        </button>

        <div id='centerTextRightHeading' className=' relative text-center p-3'>
            <p className={`${bebas.className} xl1:text-7xl lg1:text-6xl sm:text-4xl text-3xl relative z-10`}>GIVE YOUR WEBSITE A</p>
            <p className={`${bebas.className} xl1:text-7xl lg1:text-6xl sm:text-4xl text-3xl relative z-10`}>FRESH START</p>

            <div id='centerTextRightBox' aria-hidden className=' origin-bottom-left bg-mainBg h-full w-1/2 absolute top-0 right-0 z-0'/>
        </div>
</div>

        <div id='centerTextRightPara' className=' text-center xl1:text-xl lg1:text-lg text-sm space-y-3 px bg-[#110E17]-4'>
            <p>
            We specialize in breathing new life into outdated websites by giving them a <span className=' text-[#AD86FF] font-bold xl1:text-xl lg1:text-lg text-base'>fresh identity,  modern themes,  and an enhanced user experience.</span> 
            </p>
            <p>
            From renaming to full-scale redesign, we make sure your site stands out in today&apos;s competitive market.
            </p>
        </div>

        <div className=' w-full flex justify-end items-center sm:gap-4 gap-2'>
            <button onClick={handleleftCarouselLeftBtn} id='leftCarouselLeftButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] sm:size-10 size-8 flex justify-center items-center'> <Image src={arrow} alt='arrow left' id='leftCarouselLeftBtnimg' className=' size-1/2 '/></button>
            <button onClick={handleleftCarouselRightBtn} id='leftCarouselRightButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] sm:size-10 size-8 flex justify-center items-center'> <Image src={arrow} alt='arrow right' id='leftCarouselRightBtnimg' className=' size-1/2 invert rotate-180'/></button>
        </div>
</div>
<div id='centerTextLeft' className={` ${!isLeftOn? " opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"} transition-opacity duration-700 absolute top-0 left-0 flex flex-col justify-between items-center  w-full h-full p-10 md:pt-40 pt-[40dvh] xl1:pr-44 md:pr-32 md:bg-[#110E17F7] bg-[#110E17] `}>

<div>
        <button onClick={() => setisLeftOn((prev) => !prev)} className={` md:h-[14px] h-2 lg1:w-1/2 md:w-2/3 w-4/5 rounded-full bg-[#d9d9d9]/10 flex justify-end items-center mx-auto mb-10`}>
          <div className={`  rounded-full h-full ${!isLeftOn?" bg-[#5E81FF] translate-x-0 w-1/2 opacity-100":" bg-mainBg md:-translate-x-32 -translate-x-[150%] opacity-0 w-1/4"} transition-all duration-500 ease-in-out`}></div>
        </button>

        <div id='centerTextLeftHeading' className=' relative text-center p-3'>
            <p className={`${bebas.className} xl1:text-7xl lg1:text-6xl sm:text-4xl text-3xl relative z-10`}>BUILD FROM SCRATCH,</p>
            <p className={`${bebas.className} xl1:text-7xl lg1:text-6xl sm:text-4xl text-3xl relative z-10`}>TAILORED TO YOUR NEEDS</p>

            <div id='centerTextLeftBox' aria-hidden className=' origin-bottom-left bg-[#5E81FF] h-full w-1/2 absolute top-0 right-0 z-0'/>
        </div>
</div>

        <div id='centerTextLeftPara' className=' text-center xl1:text-xl lg1:text-lg text-sm space-y-3 px bg-[#110E17]-4'>
            <p>
            Need a new website built from scratch? Our expert designers and developers create bespoke websites that are tailor-made for your business. 
            </p>
            <p>
            From small businesses to large enterprises, we ensure that your online presence is <span className=' text-[#7B98FF] font-bold xl1:text-xl lg1:text-lg text-base'>scalable, secure, and SEO-friendly.</span> 
            </p>
        </div>

        <div className=' w-full flex md:justify-start justify-end items-center sm:gap-4 gap-2'>
        <button onClick={handlerightCarouselLeftBtn} id='rightCarouselLeftButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] sm:size-10 size-8 flex justify-center items-center'> <Image src={arrow} alt='arrow left' id='rightCarouselLeftBtnimg' className=' size-1/2 '/></button>
        <button onClick={handlerightCarouselRightBtn} id='rightCarouselRightButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] sm:size-10 size-8 flex justify-center items-center'> <Image src={arrow} alt='arrow right' id='rightCarouselRightBtnimg' className=' size-1/2 invert rotate-180'/></button>
        </div>
</div>


    </div>

    <RightCarousel/>

    </main>  
  )
}

export default ExpertiseScreen
