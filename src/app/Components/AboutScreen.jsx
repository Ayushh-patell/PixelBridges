import Image from 'next/image'
import React from 'react'
import aboutBg from "../PixelBridges/aboutBg2.png"
import { mont } from '../layout'
import AboutWomanImg from './AboutWomanImg'

const AboutScreen = () => {
  return (
    <div id='AboutScreen' className=' w-full h-full opacity-0 pointer-events-none absolute top-0 left-0 flex flex-col justify-end items-center'>
    {/* <div className=' fixed z-[5] top-0 left-0 h-dvh w-2/5 bg-white/20 mix-blend-screen'></div> */}
      <div id='aboutscreenOurStory' className=' fixed z-10 top-0 left-0 h-dvh w-2/5 p-10 py-28 font-[family-name:var(--font-nexa)] bg-gradient-to-b from-[#7d79ff]/20 to-white/10  backdrop-blur-sm'>
      
        <h2 className=' border-l-[15px] border-mainBg px-4 mt-10 mx-auto w-max py-3 text-7xl text-white'>Our Story</h2>
<div className={` w-full ${mont.className} text-xl space-y-3 pt-8 px-4 text-white/65`}>
    
<p>
        <span className=' font-bold'>Pixelbridges started in 2023</span> with one goal in mind: to help businesses redefine their digital presence.
        </p>
        <p>
        We&quot;ve worked with <span className=' font-bold'>over 100 clients</span> across various industries, revamping their websites and building stunning new ones from scratch. 
        </p>
        <p>
        With a focus on <span className=' font-bold'>quality, functionality, and user experience</span>, we&apos;re proud to say we&apos;ve built bridges to the digital future for our clients.
        </p>
</div>
      </div>

<AboutWomanImg/>


<div className=' w-full text-center relative z-30 bg-[#3C3842] py-3 px-2 font-[family-name:var(--font-nexa)] mix-blend-hard-light'>
    <p>CONTACT US AT   <a href="mailto:Pixelbridges@gmail.com">Pixelbridges@gmail.com</a></p>
</div>


      <Image src={aboutBg} alt='about screen bg' className=' w-screen h-dvh fixed z-0 top-0 left-0 pointer-events-none object-cover object-center'/>
    </div>
  )
}

export default AboutScreen
