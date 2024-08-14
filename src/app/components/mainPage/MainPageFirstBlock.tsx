import React from 'react'

export const MainPageFirstBlock =() => {
  return (
    <section className=' relative'>
       <div className='absolute  top-[-7%] left-[85%] z-10' >
          <img src="/img/2mainFirstLeft.svg" alt="mainPhoto" />
      </div>
      <div className='absolute z-10'>
          <img src="/img/2mainFirst.svg" alt="mainPhoto" />
      </div>
 
      <div className='container h-[970px]'>
    
      <div className='flex flex-col items-end text-end h-[100%] pt-[200px]'>
        <h3 className='font-raleway text-[80px] leading-[5rem] z-20  font-bold'>Профессиональные <br/> решения для вашего<br/> бизнеса</h3>
      <span className='text-[20px] font-raleway mt-[42px] mb-[62px]  z-20' >Инновационные решения для вашей компании<br></br> от опытной команды профессионалов</span>
      <button className='pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>

      </div>
     
    </section>
  )
}
