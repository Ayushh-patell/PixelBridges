import Image from "next/image";
import mainBg from './PixelBridges/pixelbridges bck 1.png'
import { bebas, mont } from "./layout";
import LandingTitle from "./Components/LandingTitle";
import ExpertiseScreen from "./Components/ExpertiseScreen/ExpertiseScreen";
import AboutScreen from "./Components/AboutScreen";


export default function Home() {
  return (
    <div className=" w-full flex-1 relative font-[family-name:var(--font-geist-sans)]">
      <main id="HomeScreen" className=" w-full h-full flex flex-col justify-between items-center gap-5 relative">
<div className=" w-full">
<h1 className={` ${bebas.className} lg:gap-[45px] md:gap-[35px] sm3:gap-[25px] gap-4 xl1:text-5xl lg:text-4xl md:text-2xl text-xl flex justify-center items-center lg:pb-8 sm3:pb-10 pb-5 lg:pt-20 pt-[11dvh] mix-blend-overlay`}>
  <span>P</span>
  <span>I</span>
  <span>X</span>
  <span>E</span>
  <span>L</span>
  <span>B</span>
  <span>R</span>
  <span>I</span>
  <span>D</span>
  <span>G</span>
  <span>E</span>
  <span>S</span>
</h1>

<div className=" w-full sm1:block hidden">
<LandingTitle/>
</div>
{/* Bridging Ideas into the</span> <span>Digital World. */}
<div className=" sm1:hidden block w-max relative text-left text-4xl font-[family-name:var(--font-nexa)] mx-auto">
  <p className=" relative z-10 w-full text-center">“</p>
  <p className=" relative z-10 w-max mb-2">Bridging</p>
  <p className=" relative z-10 w-max my-2">Ideas</p>
  <p className=" relative z-10 w-max my-2">into the</p>
  <p className=" relative z-10 w-max my-2">Digital</p>
  <p className=" relative z-10 w-max mt-2">World.</p>
  <p className=" relative z-10 w-full text-center">“</p>

  <div aria-hidden className=" bg-mainBg absolute top-1/2 -translate-y-1/2 -left-3 h-[80%] w-[30%] z-0"/>
</div>
</div>

      <div className=" absolute bottom-0 left-0 w-full flex sm1:flex-row flex-col-reverse justify-between items-center md:gap-16 sm1:gap-2 gap-4">
      {/* LEFT BACKGORUND COLOR */}
      <div className=" sm1:w-3/4 w-screen h-28 bg-white mix-blend-overlay sm1:-translate-x-10 -translate-x-[1.7rem] absolute z-[-5] sm1:top-1/2 sm1:bottom-auto bottom-0 sm1:-translate-y-1/2 left-0"/>
        <div className={` sm1:w-3/4 w-full flex-shrink-0 h-28 text-white lg:text-base md:text-xs sm4:text-[10px] text-[8px] sm1:-translate-x-10 sm1:pl-10 flex sm1:flex-row flex-col sm1:justify-between justify-around items-center lg:gap-10 md:gap-5 gap-0 ${mont.className}`}>
          <p className=' font-bold flex flex-col justify-center sm1:items-start items-center sm1:text-left text-center'>
          <span className=" lg:text-base md:text-xs text-[10px]">At Pixelbridges, we turn your website into a powerful tool</span> 
          <span className=" font-extralight">that looks great and performs even better, be it revamping or creating from scratch.</span>
          </p>
          <p className=' font-extralight flex flex-col justify-center items-center text-center'>
          <span className=" lg:text-base md:text-xs text-[10px]">We combine creativity, cutting-edge technology, and user-focused design to</span>
          <span className="font-bold">ensure your website stands out.</span>
          </p>
        </div>
        <div className=" sm1:w-1/4 sm4:w-1/2 w-2/3 bg-white/20 sm1:h-32 h-24 text-center flex flex-col justify-center items-center">
          <p className=" font-bold lg:text-6xl md:text-5xl sm1:text-4xl text-5xl sm1:text-white/90 text-white/25">100+</p>
          <p className=" text-white/50 lg:text-base md:text-xs text-[10px]">Projects completed since 2023</p>
        </div>
      </div>

        <Image src={mainBg} alt="cityskyline with a bridge" className=" w-screen h-dvh pointer-events-none fixed z-[-10] top-0 left-0 object-cover object-left"/>
      </main>
      <ExpertiseScreen/>
      <AboutScreen/>
    </div>

  );
}
