import React from 'react'
import RightCarousel1 from '../../PixelBridges/rightCarousel1.png'
import RightCarousel2 from '../../PixelBridges/rightCarousel2.png'
import RightCarousel3 from '../../PixelBridges/rightCarousel3.png'
import RightCarousel4 from '../../PixelBridges/rightCarousel4.png'
import Image from 'next/image'

const RightCarousel = () => {
  return (
    <div id='rightCarousel' className=' fixed md:h-dvh h-[40dvh] z-0 w-full top-0 md:-right-full right-0 flex justify-start items-center overflow-hidden'>
        <div id='rightcarouselText' className=' md:w-auto w-max bg-[#1A181D] rounded-full lg:px-16 md:px-10 px-4 lg:py-5 py-3 md:text-lg text-xs z-20 absolute top-1/2 -translate-y-1/2 xl:right-[11.5%]  md:right-[7%] right-1/2 md:translate-x-0 translate-x-1/2'>Custom Design & Coding</div>
      <Image src={RightCarousel1} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel2} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel3} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel4} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
    </div>
  )
}

export default RightCarousel
