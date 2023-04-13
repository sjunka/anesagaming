import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import home from "/home.png";
import intro from "/intro.png";
import live from "/live.png";
import socials from "/socials.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect= { {
          crossFade: true
        }}
        speed={1100}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-bg" style={{ backgroundImage: `url(${intro})` }}>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-bg" style={{ backgroundImage:`url(${home})` }}>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-bg" style={{ backgroundImage: `url(${live})` }}>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-bg" style={{ backgroundImage: `url(${socials})` }}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", color: 'white' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor laoreet nisl, at hendrerit velit dignissim eu. In in ipsum lobortis, bibendum nibh eu, laoreet magna. Donec hendrerit sapien a lacinia commodo. Fusce maximus, leo non posuere euismod, tortor elit euismod elit, a ullamcorper metus nulla vel lorem. Ut vel placerat purus, ac vestibulum metus. Sed vel ornare ipsum. Aenean vel efficitur metus. Praesent
            </p>
          </div >
        </SwiperSlide>
      </Swiper>

    </>
  );
}
