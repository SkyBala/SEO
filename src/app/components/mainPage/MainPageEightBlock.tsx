import React from 'react'

export const MainPageEightBlock =() => {
  return (
    <section className=' container  mb-[100px] flex justify-center items-center'>
        <div className='w-[1280px] h-[544px] bg-[url("/img/bg8.png")] font-raleway flex justify-center items-center flex-col    text-center gap-3'>
        <div className='mb-[20px]'> <h2 className='text-[96px] font-raleway font-extrabold  leading-[6rem] '>Оцените стоимость вашего проекта</h2>
        <span className='text-[24px]'>Visually attractive design from concept to final result. We <br/> create solutions that are bold and forward-looking.</span></div>
       
        <button className='pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>расчитать</button>

        </div>
    </section>
  )
}
