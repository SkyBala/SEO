import React from 'react';
import dynamic from 'next/dynamic';

const AboutUsSixBlock  = dynamic(() => import('../components/aboutUs/AboutUsSixBlock'), {
  ssr: false,
});

import {Header,Footer, AboutUsFirstBlock, AboutUsFourBlock, AboutUsSecondBlock, AboutUsThreeBlock, MainPageSevenBlock, MainPageThirdBlock,AboutUsSevenBlock, MainPageSixBlock,MainPageEightBlock,MainPageTenBlock } from '../components';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <AboutUsFirstBlock />
      <AboutUsSecondBlock />
      <div className="bg-[white] text-[black] h-[739px]">
        <AboutUsThreeBlock />
      </div>
      <AboutUsFourBlock />
      <MainPageSevenBlock />
      <AboutUsSixBlock />
      <MainPageThirdBlock/>
      <AboutUsSevenBlock/>
      <MainPageSixBlock/>
      <MainPageEightBlock/>
      <MainPageTenBlock/>
      <Footer />
    </div>
  );
}
