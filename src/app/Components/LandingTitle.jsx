"use client";

import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import React, { useEffect, useState } from 'react'
let interval;
const LandingTitle = () => {
  gsap.registerPlugin(CustomEase)

    const [isBoxLeft, setisBoxLeft] = useState(false)

    useEffect(() => {
        clearInterval(interval);

        interval = setInterval(() => {
            setisBoxLeft((prev) => !prev)
        }, 4000);

        return () => clearInterval(interval)
    },[])

    useEffect(() => {
        if(isBoxLeft) {
            gsap.to("#bgBox", {scaleX:1.8, duration:0.6})
            gsap.to("#bgBox", {left:0, duration:1.2, ease:CustomEase.create("custom", "M0,0 C0,0 0.289,0.039 0.433,0.522 0.51,0.78 0.688,1.224 0.688,1.224 0.688,1.224 0.752,0.999 0.784,1 0.794,1 0.824,1.049 0.844,1.05 0.869,1.051 0.896,1 0.915,1 0.923,1 0.939,1.032 0.954,1.035 0.977,1.038 1,1 1,1 ")})
            gsap.to("#bgBox", {scaleX:1, duration:0.5, delay:0.6})
        }
        else {
            gsap.to("#bgBox", {scaleX:1.8, duration:0.6})
            gsap.to("#bgBox", {left:"75%", duration:1.2, ease:CustomEase.create("custom", "M0,0 C0,0 0.289,0.039 0.433,0.522 0.51,0.78 0.688,1.224 0.688,1.224 0.688,1.224 0.752,0.999 0.784,1 0.794,1 0.824,1.049 0.844,1.05 0.869,1.051 0.896,1 0.915,1 0.923,1 0.939,1.032 0.954,1.035 0.977,1.038 1,1 1,1 ")})
            gsap.to("#bgBox", {scaleX:1, duration:0.5, delay:0.6})
        }
    }, [isBoxLeft])

  return (
<div className=" 1xl:w-[70%] xl:w-[80%] w-[90%] mx-auto relative overflow-hidden">
  <h2 className=" font-[family-name:var(--font-nexa)] relative z-10 xl1:text-[5rem] lg:text-[4.5rem] md:text-[3rem] text-[2.5rem] text-center flex flex-col justify-center items-center"><span>“ Bridging Ideas into the</span> <span>Digital World. ”</span></h2>

  {/* BACKGROUND PURPLE BOX FOR ANIMATION */}
  <div aria-hidden id='bgBox' className=" absolute z-0 top-0 left-[0%] h-full w-1/4 bg-mainBg"/>
</div>
  )
}

export default LandingTitle
