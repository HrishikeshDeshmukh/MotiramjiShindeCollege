import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';
import Picture from '../assets/3.jpeg'
import sliderImg1 from '../assets/2.jpeg'
import sliderImg2 from '../assets/6.jpeg'
import sliderImg3 from '../assets/4.jpeg'
import sliderImg4 from '../assets/5.jpeg'
import sliderImg5 from '../assets/8.jpeg'
import sliderImg6 from '../assets/7.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const CollegeNews = () => {
  return (
    <div className='lg:w-[90%] flex justify-center bg-slate-200 rounded-lg flex-col  my-8 overflow-x-hidden mx-auto mt-9'>
      <Link to='/activity'>
      <h6 className='text-2xl font-bold text-[#08377b] text-center mt-8 cursor-pointer'>
        College News and Events
      </h6>
      </Link>

      <div className='w-full flex items-center justify-center my-9'>

        <div className='w-full m-3 relative flex flex-col md:flex-row'>

          <div className='md:w-1/2  flex-col justify-center md:p-3 md:m-3 gap-3 flex z-22'>
            <Link to='/activity'>
              <img src={Picture} alt="" />
              <h6 className="text-lg font-semibold text-slate-700 mt-2">Annual Day Function</h6> </Link>
          </div>


          <div className='md:w-1/2 p-3 m-3 flex justify-center items-center'>
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                355: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                650: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },

                1023: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >


              <SwiperSlide>
                <div className="slide">
                    <img src={sliderImg1} alt="" /> 
                    <h6>Nursing Oath Event</h6>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="slide">
                  <img src={sliderImg2} alt="" />
                  <h6>Mahaparivahan Day</h6>
                </div>

              </SwiperSlide>


              <SwiperSlide>
                <div className="slide">
                  <img src={sliderImg3} alt="" />
                  <h6>Ch. Shivaji Maharaj Jayanti</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <img src={sliderImg4} alt="" />
                  <h6>Welcome Ceremony</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <img src={sliderImg5} alt="" />
                  <h6>Hospital Visit</h6>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <img src={sliderImg6} alt="" />
                  <h6>Saraswati Mata Event</h6>
                </div>
              </SwiperSlide>





            </Swiper>


          </div>


        </div>

      </div>


    </div>
  )
}

export default CollegeNews
