import React from 'react'
import { Header , Footer, ServicePageFirstBlock, ServicePageSecondBlock, ServicePageThirdBlock } from '../components'

export default function Service() {
  return (
    <div>
      <section className='bg-[url("/img/bg-sevice-page.png")] h-[902px]'>
         <Header/>
      <ServicePageFirstBlock/>
      </section>
      <ServicePageSecondBlock/>
      <ServicePageThirdBlock/>
      <Footer/>
    </div>
  )
}
