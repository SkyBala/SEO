import React from 'react'

export const AboutUsFourBlock =() => {
  return (
    <section className=' container'>
      <div className='flex flex-col mt-[100px]'>
        <div className='flex flex-row  justify-between'>
            <h2 className='font-raleway text-[54px] leading-[4rem] z-20  font-bold'>“We are passionate about <br/> creating visually stunningare <br/> passionate about creating </h2>
            <span  className='text-[18px] font-raleway  font-semibold  z-20'>We improve our clients marketing results with a <br/> data driven approach and we are hell-bent on <br/> making it awesome. Our goal is to create a <br/> new, data oriented </span>
        </div>
        <div className='flex flex-row justify-between items-start mt-[150px]'>
            <div >
                <div className='flex  flex-row justify-between w-[521px] mb-[60px]'>
                    <span className='text-[24px] font-semibold font-raleway '>01</span>
                    <div>
                        <h3 className='text-[24px] font-semibold font-raleway mb-[20px]'>Lets get acquainted</h3>
                        <p className='text-[18px] font-raleway  font-semibold'>We improve our clients marketing results with a<br/> data driven approach and we are hell-bent on<br/> making it awesome. Our goal is to create a new,<br/> data oriented We improve our clients marketing<br/> results with</p>
                    </div>
                </div>
                <div className='flex  flex-row justify-between w-[521px]'>
                    <span className='text-[24px] font-semibold font-raleway '>02</span>
                    <div>
                          <h3  className='text-[24px] font-semibold font-raleway mb-[20px]'> Our goal is to create</h3>
                        <p  className='text-[18px] font-raleway  font-semibold'>We improve our clients marketing results with a<br/> data driven approach and we are hell-bent on <br/> making it awesome. Our goal is to create a new,<br/> data oriented We improve our clients marketing<br/> results with</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[530px] h-[580px]' src="/img/AboutUs-4img.png" alt="" />
            </div>
        </div>
      </div>
            
    </section>
  )
}
