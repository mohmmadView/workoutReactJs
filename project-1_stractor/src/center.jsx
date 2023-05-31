import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from "./assets/Best-Colleges-Engineering-2022-Georgia-Institute-Tech-Feature2.jpg"
import img2 from "./assets/best-fishing-times-twitter.jpg"
import img3 from "./assets/Best-Amazing-Images-For-Desktop.jpg"
import img4 from "./assets/image.jpg"
 export default function Center(){

return(
    <main>
<Slider />
</main>
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
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper flex w-full justify-center h-screen"
    >
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4 object-cover" src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-3/4  object-cover" src={img4} alt="" /></SwiperSlide>
   
    </Swiper>
  </>


)

 }