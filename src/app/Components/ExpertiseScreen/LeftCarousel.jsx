import Image from 'next/image'
import React from 'react'
import LeftCarousel1 from '../../PixelBridges/leftCarousel1.png'
import LeftCarousel2 from '../../PixelBridges/leftCarousel2.png'
import LeftCarousel3 from '../../PixelBridges/leftCarousel3.png'
import LeftCarousel4 from '../../PixelBridges/leftCarousel4.png'

const LeftCarousel = () => {
  return (
    <div id='leftCarousel' className=' fixed h-dvh z-0 w-full top-0 left-0 flex justify-start items-center overflow-hidden'>
    <div id='leftcarouselText' className=' bg-[#1A181D] rounded-full px-10 py-3 text-lg z-20 absolute top-1/2 -translate-y-1/2 left-[14%]'>New Name and Identity</div>
      <Image src={LeftCarousel1} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel2} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel3} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={LeftCarousel4} alt='left carousel' className='leftCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
    </div>
  )
}

export default LeftCarousel
