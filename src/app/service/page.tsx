import React from 'react'
import { Header , Footer, ServicePageFirstBlock, ServicePageSecondBlock, ServicePageThirdBlock ,ServicePageFourBlock, ServicePageFiveBlock,MainPageSixBlock,MainPageTenBlock} from '../components'

export default function Service() {
  return (
    <div>
      <section className='bg-[url("/img/bg-sevice-page.png")] h-[902px]'>
         <Header/>
      <ServicePageFirstBlock/>
      </section>
      <ServicePageSecondBlock/>
      <div className=" bg-[white] text-[black]">
         <ServicePageThirdBlock/>
      </div>  
      <div className='bg-[url("/img/Service-five-bg.png")] h-[631px] '>
        <ServicePageFourBlock/>

</div>
<div  className=" bg-[white] text-[black]" >
  <ServicePageFiveBlock/>
</div>
 <MainPageSixBlock/>
  
      <MainPageTenBlock/>
      <Footer/>
    </div>
  )
}
