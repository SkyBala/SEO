import React from 'react'

export const AboutUsFirstBlock =() => {
  return (
    <section className=' container'>
      <div className='flex flex-row items-center  mt-[50px]'>
        <img className='w-[738px] h-[600px]' src="/img/AboutUs-first-img.png" alt="" />
        <div className='flex flex-col items-start justify-center text-start h-[100%]  ml-[100px]'>
        <h3 className='font-raleway text-[54px] leading-[4rem] z-20  font-bold'>“We are passionate <br/> about creating<br/> visually stunning </h3>
      <span className='text-[20px] font-raleway mt-[42px] mb-[62px]  z-20' >We improve our clients marketing results with a<br/> data driven approach and we are hell-bent on <br/>making</span>
      <button className=' pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#D987FF] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>

      </div>
            

    </section>
  )
}
