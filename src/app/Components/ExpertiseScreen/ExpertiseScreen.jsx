"use client";

import { bebas } from '@/app/layout'
import React, { useEffect, useState } from 'react'
import LeftCarousel from './LeftCarousel'
import RightCarousel from './RightCarousel'
import gsap from 'gsap';
import Image from 'next/image';
import arrow from "../../PixelBridges/arrow.png"

const leftCarouselTexts = ["New Name and Identity", "Modern Themes & Visuals", "Enhanced User Experience", "Fully Responsive & Mobile Friendly"]
const rightCarouselTexts = ["Custom Design & Coding", "E-commerce Integration", "SEO Optimized", "Scalable & Secure"]

const ExpertiseScreen = () => {

  const [isLeftOn, setisLeftOn] = useState(true)
  const [leftCurrSlide, setleftCurrSlide] = useState(0)
  const [rightCurrSlide, setrightCurrSlide] = useState(0)

  // ANIMATION FOR LEFT RIGHT CAROUSEL POSITION
  useEffect(() => {
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

    // UPDATE THE TOPBAR   
    if(isLeftOn && document.getElementById("ExpertiseScreen").getAttribute("data-isleft") === "0") {
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

    <div id='centerText' className=' h-full w-[65%] fixed top-0 right-0 z-10'>

<div id='centerTextRight' className={` ${isLeftOn? " opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"} transition-opacity duration-700 flex flex-col justify-between items-center  w-full h-full p-10 pt-40 pl-44 bg-[#110E17F7] `}>

<div>
<button onClick={() => setisLeftOn((prev) => !prev)} className={` h-[14px] w-1/2 rounded-full bg-[#d9d9d9]/10 flex justify-start items-center mb-12 mx-auto`}>
          <div className={` w-1/2 rounded-full h-full ${isLeftOn?" bg-[#B896FF] translate-x-0":" bg-[#5E81FF] translate-x-32"} transition-all duration-700`}></div>
        </button>

        <div className=' relative text-center p-3'>
            <p className={`${bebas.className} text-7xl relative z-10`}>GIVE YOUR WEBSITE A</p>
            <p className={`${bebas.className} text-7xl relative z-10`}>FRESH START</p>

            <div aria-hidden className=' bg-mainBg h-full w-1/2 absolute top-0 right-0 z-0'/>
        </div>
</div>

        <div className=' text-center text-xl space-y-3 px-4'>
            <p>
            We specialize in breathing new life into outdated websites by giving them a <span className=' text-[#AD86FF] font-bold'>fresh identity,  modern themes,  and an enhanced user experience.</span> 
            </p>
            <p>
            From renaming to full-scale redesign, we make sure your site stands out in today&apos;s competitive market.
            </p>
        </div>

        <div className=' w-full flex justify-end items-center gap-4'>
            <button onClick={handleleftCarouselLeftBtn} id='leftCarouselLeftButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] size-10 flex justify-center items-center'> <Image src={arrow} alt='arrow left' id='leftCarouselLeftBtnimg' className=' size-1/2 '/></button>
            <button onClick={handleleftCarouselRightBtn} id='leftCarouselRightButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] size-10 flex justify-center items-center'> <Image src={arrow} alt='arrow right' id='leftCarouselRightBtnimg' className=' size-1/2 invert rotate-180'/></button>
        </div>
</div>
<div id='centerTextLeft' className={` ${!isLeftOn? " opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"} transition-opacity duration-700 absolute top-0 left-0 flex flex-col justify-between items-center  w-full h-full p-10 pt-40 pr-44 bg-[#110E17F7] `}>

<div>
<button onClick={() => setisLeftOn((prev) => !prev)} className={` h-[14px] w-1/2 rounded-full bg-[#d9d9d9]/10 flex justify-end items-center mx-auto mb-10`}>
        <div className={` w-1/2 rounded-full h-full ${!isLeftOn?" bg-[#5E81FF] translate-x-0":" bg-mainBg -translate-x-32"} transition-all duration-700`}></div>
        </button>

        <div className=' relative text-center p-3'>
            <p className={`${bebas.className} text-7xl relative z-10`}>BUILD FROM SCRATCH,</p>
            <p className={`${bebas.className} text-7xl relative z-10`}>TAILORED TO YOUR NEEDS</p>

            <div aria-hidden className=' bg-[#5E81FF] h-full w-1/2 absolute top-0 right-0 z-0'/>
        </div>
</div>

        <div className=' text-center text-xl space-y-3 px-4'>
            <p>
            Need a new website built from scratch? Our expert designers and developers create bespoke websites that are tailor-made for your business. 
            </p>
            <p>
            From small businesses to large enterprises, we ensure that your online presence is <span className=' text-[#7B98FF] font-bold'>scalable, secure, and SEO-friendly.</span> 
            </p>
        </div>

        <div className=' w-full flex justify-start items-center gap-4'>
        <button onClick={handlerightCarouselLeftBtn} id='rightCarouselLeftButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] size-10 flex justify-center items-center'> <Image src={arrow} alt='arrow left' id='rightCarouselLeftBtnimg' className=' size-1/2 '/></button>
        <button onClick={handlerightCarouselRightBtn} id='rightCarouselRightButton' className=' bg-[#d9d9d9] border-2 border-[#d9d9d9] size-10 flex justify-center items-center'> <Image src={arrow} alt='arrow right' id='rightCarouselRightBtnimg' className=' size-1/2 invert rotate-180'/></button>
        </div>
</div>


    </div>

    <RightCarousel/>

    </main>  
  )
}

export default ExpertiseScreen
