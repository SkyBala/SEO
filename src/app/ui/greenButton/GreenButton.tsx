import React from 'react'

export const  GreenButton =(props : string) => {
  return (
    <button className='pt-[12px] pb-[12px] pr-[28px] pl-[28px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-black'>
        {props.title}
    </button>
  )
}
  