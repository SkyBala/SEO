import React from 'react'

export const ServiceIdPageFirstBlock =() => {
  return (
<section>
    <div className='flex flex-row items-center w-[100vw]  mt-[50px]'>
        <img className='w-[50%] h-[800px] z-10' src="/img/ServicePageImg.svg" alt="" />
    <div className='flex flex-col items-start justify-center text-start h-[100%]  ml-[50px] w-[40%]'>
        <h3 className='font-raleway text-[124px] leading-[7rem] z-20 font-bold'>3D motion ролики</h3>
        <span className='text-[18px] font-raleway mt-[67px] font-semibold mb-[32px] ml-[8%] z-20' >We improve our clients marketing results with a data driven approach and we are hell-bent on making</span>
        <button className=' pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#85FF01] font-bold font-raleway text-[18px] rounded-[10px] text-[black] ml-[8%]   z-20'>ОСТАВИТЬ ЗАЯВКУ</button>
    </div>
      </div>
    </section>
  )
}
