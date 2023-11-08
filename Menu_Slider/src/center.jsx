import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import React,{useState} from "react";

// Import Swiper styles
import "swiper/css";



// anmiton text
import MovingText from 'react-moving-text'

// import required modules
import { Autoplay } from "swiper";
import img1 from "./assets/Best-Colleges-Engineering-2022-Georgia-Institute-Tech-Feature2.jpg"
import img2 from "./assets/best-fishing-times-twitter.jpg"
import img3 from "./assets/Best-Amazing-Images-For-Desktop.jpg"
import img4 from "./assets/image.jpg"
 export default function Center(){
let textLetters = "test text"
return(
    <main className="relative">
 <MyAnimatedTypo />
    {/* <h1 className="text-5xl  text-white font-serif font-bold bg-stone-700/25  p-4 absolute z-10  top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">Hyer is a simple, straightforward app that connects  </h1> */}
<Slider />
</main>
)


 }
  const MyAnimatedTypo = () => {
  return (
    <MovingText
    className="text-5xl  text-white font-serif font-bold bg-stone-700/25  p-4 absolute z-10  top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
      type="squeezeVertical"
      duration="1000ms"
      delay="0s"
      direction="alternate"
      timing="ease"
      iteration="infinite"
      fillMode="none">
  
<h2 className="font-serif">Hyer is a simple, straightforward app that connects</h2>  </MovingText>
  )
 
  }
 function Slider(){

return(
    <>
    <Swiper
   
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className="mySwiper flex w-full  justify-center h-screen"
    >
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4  object-cover" src={img4} alt="" /></SwiperSlide>
   
    </Swiper>
  </>


)

 }
 function LetterAnm(){
let textLetters = ["test","anmiaton"] 

  
 {textLetters.map((letter, index) =>
      <MovingComponent
        type="shadow"
        duration="1000ms"
        delay="index * 100ms"
        direction="normal"
        timing="ease"
        iteration="5"
        fillMode="none">
        {letter}
      </MovingComponent>)}
  
 }


