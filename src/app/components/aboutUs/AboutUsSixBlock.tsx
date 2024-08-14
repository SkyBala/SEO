"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const AboutUsSixBlock = () => {
  const slides = [1, 2, 3, 4, 5,6,7,8,9,10];

  return (
    <div>
       <div className='grid grid-cols-2  font-raleway text-start mb-[50px]'>
            <h2 className='text-[54px] font-bold'>Our partners</h2>
            <span className='ml-[100px] text-[18px] font-semibold'>We improve our clients marketing results with a <br/>data driven approach and we are hell-bent on<br/> making it awesome</span>
        </div>
       <Swiper
      modules={[Navigation, Pagination]}
        slidesPerView={4.2}
        spaceBetween={30}
        freeMode={true}
      navigation
      pagination={{ clickable: true }}
      className='h-[358px]'
    >
      {slides.map((slide) => (
        <SwiperSlide  key={slide}> 
          <div>
            <img src="/img/slider-team-img.png" alt="" />
            <div></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
  );
};

export default AboutUsSixBlock;
