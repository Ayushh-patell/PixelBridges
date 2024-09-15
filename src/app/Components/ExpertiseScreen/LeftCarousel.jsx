import Image from 'next/image'
import React from 'react'
import LeftCarousel1 from '../../PixelBridges/leftCarousel1.png'
import LeftCarousel2 from '../../PixelBridges/leftCarousel2.png'
import LeftCarousel3 from '../../PixelBridges/leftCarousel3.png'
import LeftCarousel4 from '../../PixelBridges/leftCarousel4.png'

const LeftCarousel = () => {
  return (
    <div id='leftCarousel' className=' fixed md:h-dvh h-[40dvh] z-0 w-full top-0 left-0 flex justify-start items-center overflow-hidden'>
    <div id='leftcarouselText' className=' md:w-auto w-max bg-[#1A181D] rounded-full lg:px-16 md:px-10 px-4 lg:py-5 py-3 md:text-lg text-xs z-20 absolute top-1/2 -translate-y-1/2 xl:left-[11.5%] md:left-[7%] left-1/2 md:translate-x-0 -translate-x-1/2'>New Name and Identity</div>
      <Image src={LeftCarousel1} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel2} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel3} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel4} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
    </div>
  )
}

export default LeftCarousel
