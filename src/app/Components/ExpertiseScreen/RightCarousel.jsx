import React from 'react'
import RightCarousel1 from '../../PixelBridges/rightCarousel1.png'
import RightCarousel2 from '../../PixelBridges/rightCarousel2.png'
import RightCarousel3 from '../../PixelBridges/rightCarousel3.png'
import RightCarousel4 from '../../PixelBridges/rightCarousel4.png'
import Image from 'next/image'

const RightCarousel = () => {
  return (
    <div id='rightCarousel' className=' fixed h-dvh z-0 w-full top-0 -right-full flex justify-start items-center overflow-hidden'>
      <Image src={RightCarousel1} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel2} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel3} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
      <Image src={RightCarousel4} alt='right carousel' className='rightCarouselItem object-cover object-left w-full h-full flex-shrink-0'/>
    </div>
  )
}

export default RightCarousel
