import React from 'react'

export const AboutUsThreeBlock =() => {
  return (
    <section className=' container relative'>
        <div className='flex flex-row items-start'>

            <img className='mt-[-250px]' src="/img/AboutUs-3block-img.svg" alt="" />
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
        </div>
            

    </section>
  )
}
