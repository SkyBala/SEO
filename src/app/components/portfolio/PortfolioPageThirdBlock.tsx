"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const PortfolioPageThirdBlock = () => {
  const slides = [1, 2, 3, 4, 5,6,7,8,9,10];

  return (
    <section className='container'>
       <div className='grid grid-cols-2  font-raleway text-start mb-[50px] mt-[166px]'>
            <h2 className='font-raleway text-[54px] leading-[4rem] z-20  font-bold'>“We are passionate about <br/> creating visually stunningare <br/> passionate about creating </h2>
         
        </div>
       <Swiper
      modules={[Navigation, Pagination]}
        slidesPerView={3.2}
        spaceBetween={20}
        freeMode={true}
      navigation
      pagination={{ clickable: true }}
      className='h-[520px]'
    >
      {slides.map((slide) => (
        <SwiperSlide  className='w-[413px]' key={slide}> 
          <div className='flex flex-col text-start'>
            <img className='h-[520px] w-[413px]' src="/img/slider-team-img.png" alt="" />
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
   
  );
};
