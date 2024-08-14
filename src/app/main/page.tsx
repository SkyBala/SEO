import { MainPageFirstBlock, MainPageFiveBlock, MainPageFourBlock, MainPageSecondBlock, MainPageThirdBlock,MainPageSixBlock, MainPageSevenBlock, MainPageEightBlock, MainPageTenBlock } from "../components";
import Header from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
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
