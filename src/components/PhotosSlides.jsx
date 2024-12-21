import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//photos
import Pic from '../assets/pic.jpeg'
import Pic1 from '../assets/pic1.jpeg'
import Pic2 from '../assets/pic2.jpg'
import Pic3 from '../assets/pic3.jpeg'
import Pic4 from '../assets/pic4.jpeg'
import Pic5 from '../assets/pic5.jpeg'
import Pic6 from '../assets/pic6.jpeg'
import Pic7 from '../assets/pic7.jpeg'
import Pic8 from '../assets/pic8.jpeg'




// import required modules
import { Pagination } from 'swiper/modules';

const PhotosSlides = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{Pic}</SwiperSlide>
        <SwiperSlide>{Pic2}</SwiperSlide>
        <SwiperSlide>{Pic3}</SwiperSlide>
        <SwiperSlide>{Pic4}</SwiperSlide>
        <SwiperSlide>{Pic1}</SwiperSlide>
        <SwiperSlide>{Pic5}</SwiperSlide>
        <SwiperSlide>{Pic7}</SwiperSlide>
        <SwiperSlide>{Pic6}</SwiperSlide>
        <SwiperSlide>{Pic8}</SwiperSlide>
      </Swiper>
    </>
  )
}

export default PhotosSlides
