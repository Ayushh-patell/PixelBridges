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
      <div className=' pointer-events-none fixed z-10 bg-mainBg xl1:h-1/2 md:h-[41%] h-[24%] 1xl1:w-1/2 lg1:w-[60%] md:w-[75%] w-[95%] right-0 xl1:bottom-[15%] md:bottom-[13%] bottom-[8%] mix-blend-screen'>
    <p className={` absolute top-0 left-0 h-full xl1:p-4 p-2 xl1:pt-3 pt-1 xl1:tracking-[0.5rem] tracking-[0.2rem] md:flex hidden flex-col-reverse justify-between items-center xl1:text-lg text-base text-black ${bebas.className}`}>
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
<Image ref={img} src={aboutWoman} alt='about female' className=' pointer-events-none 2xl1:h-dvh xl1:h-[90dvh] md:h-[75dvh] h-[45dvh] fixed z-20 bottom-0 right-0 object-contain object-right-bottom'/>
<div id='aboutwomanDivParent' className=' pointer-events-none fixed z-30 bottom-0 right-0 mix-blend-color'>
<div id='aboutwomanDiv' className=' bg-mainBg 2xl1:h-dvh xl1:h-[90dvh] md:h-[75dvh] h-[45dvh] '/>
</div>
    

    </>
  )
}

export default AboutWomanImg
