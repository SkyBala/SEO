import { Header, ServiceIdPageFirstBlock,ServiceIdPageSecondBlock,ServiceIdPageThirdBlock,Footer, ServicePageFiveBlock,MainPageSixBlock,MainPageTenBlock } from "../../components";

export default function ServiceId  () {
return(
    <>
        <Header/>
        <ServiceIdPageFirstBlock/>
        <ServiceIdPageSecondBlock/>
        <ServiceIdPageThirdBlock/>
        <section className='text-[black] bg-[white]'>
             <ServicePageFiveBlock/>
        </section>
        <MainPageSixBlock/>
        <MainPageTenBlock/>
        <Footer/>
    </>
)
}