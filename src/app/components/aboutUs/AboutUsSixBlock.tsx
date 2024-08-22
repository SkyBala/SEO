"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const AboutUsSixBlock = () => {
  const slides = [1, 2, 3, 4, 5,6,7,8,9,10];

  return (
    <section className='container'>
       <div className='grid grid-cols-2  font-raleway text-start mb-[50px]'>
            <h2 className='text-[54px] font-bold'>Our partners</h2>
            <span className='ml-[100px] text-[18px] font-semibold'>We improve our clients marketing results with a <br/>data driven approach and we are hell-bent on<br/> making it awesome</span>
        </div>
       <Swiper
      modules={[Navigation, Pagination]}
        slidesPerView={4.5}
        spaceBetween={20}
        freeMode={true}
      navigation
      pagination={{ clickable: true }}
      className='h-[358px]'
    >
      {slides.map((slide) => (
        <SwiperSlide  className='w-[305px]' key={slide}> 
          <div className='flex flex-col text-start'>
            <img className='h-[286px] ' src="/img/slider-team-img.png" alt="" />
            <div>
              <h3 className='font-raleway text-[24px] font-semibold'>Aki Sam</h3>
              <span className='font-raleway text-[18px] font-semibold'>CEO</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
   
  );
};

export default AboutUsSixBlock;
