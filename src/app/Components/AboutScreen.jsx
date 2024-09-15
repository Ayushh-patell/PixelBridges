import Image from 'next/image'
import React from 'react'
import aboutBg from "../PixelBridges/aboutBg2.png"
import { mont } from '../layout'
import AboutWomanImg from './AboutWomanImg'

const AboutScreen = () => {
  return (
    <div id='AboutScreen' className=' w-full h-full opacity-0 pointer-events-none absolute top-0 left-0 flex flex-col md:justify-end justify-center items-center'>
      <div id='aboutscreenOurStory' className=' fixed z-10 top-0 left-0 md:h-dvh h-[45dvh] 1xl1:w-2/5 lg1:w-1/3 md:w-1/5 w-screen 1xl1:p-10 p-5 1xl1:py-28 md:py-20 py-14 font-[family-name:var(--font-nexa)] bg-gradient-to-b from-[#7d79ff]/20 to-white/10  backdrop-blur-sm'>
      
        <h2 className=' lg1:border-l-[15px] border-l-[7px] border-mainBg md:px-4 px-1 1xl1:mt-10 xl1:mt-5 md:mt-7 mt-4 md:mx-auto mx-2 w-max lg1:py-3 py-2 1xl1:text-7xl xl1:text-6xl lg1:text-4xl md:text-xl text-3xl text-white'>Our Story</h2>
<div className={` w-full ${mont.className} 1xl1:text-xl xl1:text-lg lg1:text-sm text-[10px] 1xl1:space-y-5 space-y-3 md:pt-10 pt-5 1xl1:px-4 px-2 text-white/65`}>
    
<p>
        <span className='1xl1:text-xl xl1:text-lg lg1:text-sm text-[12px] font-bold'>Pixelbridges started in 2023</span> with one goal in mind: to help businesses redefine their digital presence.
        </p>
        <p>
        We&quot;ve worked with <span className='1xl1:text-xl xl1:text-lg lg1:text-sm text-[12px] font-bold'>over 100 clients</span> across various industries, revamping their websites and building stunning new ones from scratch. 
        </p>
        <p>
        With a focus on <span className='1xl1:text-xl xl1:text-lg lg1:text-sm text-[12px] font-bold'>quality, functionality, and user experience</span>, we&apos;re proud to say we&apos;ve built bridges to the digital future for our clients.
        </p>
</div>
      </div>

<AboutWomanImg/>


<div className=' w-full text-center md:text-base text-xs md:relative fixed md:top-0 top-1/2 md:translate-y-0 -translate-y-1/2 left-0 z-30 bg-[#3C3842] md:py-3 py-1 px-2 font-[family-name:var(--font-nexa)] mix-blend-hard-light'>
    <p>CONTACT US AT   <a href="mailto:Pixelbridges@gmail.com">Pixelbridges@gmail.com</a></p>
</div>


      <Image src={aboutBg} alt='about screen bg' className=' w-screen h-dvh fixed z-0 top-0 left-0 pointer-events-none object-cover object-center'/>
    </div>
  )
}

export default AboutScreen
