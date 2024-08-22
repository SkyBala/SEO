import {Header,Footer, MainPageFirstBlock, MainPageFiveBlock, MainPageFourBlock, MainPageSecondBlock, MainPageThirdBlock,MainPageSixBlock, MainPageSevenBlock, MainPageEightBlock, MainPageTenBlock } from "../components";

export default function Main() {
  return (
   <section className="font-raleway">
    <Header/>
    <MainPageFirstBlock/>
    <MainPageSecondBlock/>
    <div className="bg-[white] text-[black]  font-raleway">
    <MainPageThirdBlock/>
    <MainPageFourBlock/>
    
    </div>
    <MainPageSixBlock/>
    <MainPageSevenBlock/>
    <MainPageEightBlock/>
    <MainPageTenBlock/>
    <hr></hr>
    <Footer/>  
   </section>
  );
}
