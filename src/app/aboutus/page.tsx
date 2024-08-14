import React from 'react';
import dynamic from 'next/dynamic';

const AboutUsSixBlock  = dynamic(() => import('../components/aboutUs/AboutUsSixBlock'), {
  ssr: false,
});

import Header from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { AboutUsFirstBlock, AboutUsFourBlock, AboutUsSecondBlock, AboutUsThreeBlock, MainPageSevenBlock } from '../components';

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
      <Footer />
    </div>
  );
}
