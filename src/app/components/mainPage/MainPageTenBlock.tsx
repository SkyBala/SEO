import React from 'react'

export const MainPageTenBlock =() => {
  return (
    <section className='container  '>
      
            <div className='flex flex-row justify-between items-center mt-[100px]'>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className='text-[80px] font-raleway font-extrabold leading-[4rem]'>Готовы начать работу с нами?</h2>
                            <button className='mt-[30px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>Оставить заявку</button>

                </div>
                
                <div>
                    <img src="/img/img-ten.png" alt="" />
                </div>
            </div>

    </section>
  )
}
