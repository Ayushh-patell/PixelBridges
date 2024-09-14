"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import aboutWoman from "../PixelBridges/aboutWoman.png"
import { bebas } from '../layout';


const AboutWomanImg = () => {
    const img = useRef();
    useEffect(() => {
        if(img.current) {
            console.log(img.current.clientWidth, img.current);
                document.getElementById('aboutwomanDiv').style.width = `${img.current.clientWidth}px`
            
        }
    },[])
  return (
    <>
      <div className=' pointer-events-none fixed z-10 bg-mainBg h-1/2 w-1/2 right-0 bottom-[15%] mix-blend-screen'>
    <p className={` absolute top-0 left-0 h-full p-4 pt-3 tracking-[0.5rem] flex flex-col-reverse justify-between items-center text-black ${bebas.className}`}>
        <span className=' -rotate-90 origin-center'>P</span>
        <span className=' -rotate-90 origin-center'>I</span>
        <span className=' -rotate-90 origin-center'>X</span>
        <span className=' -rotate-90 origin-center'>E</span>
        <span className=' -rotate-90 origin-center'>L</span>
        <span className=' -rotate-90 origin-center'>B</span>
        <span className=' -rotate-90 origin-center'>R</span>
        <span className=' -rotate-90 origin-center'>I</span>
        <span className=' -rotate-90 origin-center'>D</span>
        <span className=' -rotate-90 origin-center'>G</span>
        <span className=' -rotate-90 origin-center'>E</span>
        <span className=' -rotate-90 origin-center'>S</span>
    </p>
</div>
<Image ref={img} src={aboutWoman} alt='about female' className=' pointer-events-none h-dvh fixed z-20 top-0 right-0 object-contain object-right-bottom pointer-events-none'/>
<div id='aboutwomanDivParent' className=' pointer-events-none fixed z-30 bottom-0 right-0 mix-blend-color'>
<div id='aboutwomanDiv' className=' bg-mainBg h-dvh '/>
</div>
    

    </>
  )
}

export default AboutWomanImg
