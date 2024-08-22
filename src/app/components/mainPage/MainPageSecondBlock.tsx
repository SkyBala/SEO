import React from 'react'

export const  MainPageSecondBlock =()  => {
  return (
    <section className='container flex justify-between h-[800px] mt-[40px] '>
       
         <div className='flex flex-col items-start text-start justify-start  h-[100%]'>
           <div className="flex items-center">
        <span className='pb-[30px]  font-raleway text-[18px] font-medium'>◯ о нас</span>
      </div>
        <h3 className='font-raleway text-[54px] leading-[4rem] z-20  font-bold'>“We are passionate <br/> about creating visually<br/> stunning </h3>
      <span className='text-[16px] font-raleway mt-[24px] mb-[52px]  z-20' >We improve our clients marketing results with a data driven approach<br/> and we are hell-bent on making it awesome. Our goal is to create a <br/>new, data oriented quality of e-comerce experience by leveraging <br/>powerful real-time analytics.</span>
      <button className='pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>Подробнее</button>
      </div>
      <div className='flex flex-col w-[40vw]'>
          <div className='flex flex-col mt-[40px] '>
            <span className='font-raleway font-semibold text-[18px]'>клиентов</span>
            <span className='font-raleway font-semibold text-[100px]'>100+</span>
            <hr/>
            </div>
          <div className='flex flex-col  mt-[40px]'>
            <span className='font-raleway font-semibold text-[18px]'>лет на рынке</span>
            <span className='font-raleway font-semibold text-[100px]'>5+</span>
            <hr/>

            </div>
          <div className='flex flex-col  mt-[40px]'  >
            <span className='font-raleway font-semibold text-[18px]'>проектов</span>
            <span className='font-raleway font-semibold text-[100px]'>90+</span>
            <hr/>

            </div>
      </div>

    </section>
  )
}
