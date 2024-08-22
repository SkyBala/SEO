import React from 'react';

export const ServicePageSecondBlock = () => {
  const array = [1, 2, 3];
  return (
    <section className="container">
      <div>
        <h2 className="font-raleway text-[54px] font-bold mt-[100px] mb-[38px]">Our services</h2>
        {array.map((i) => (
          <div
            key={i}
            className={`font-raleway mb-[130px] relative flex items-end justify-between ${
              i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <span className="text-[180px] text-[white] text-opacity-[8%] text-center  absolute inset-0 flex justify-center items-start z-10">
              3D motion
            </span>
            <img className="relative z-20" src="/img/ServicePageImg.svg" alt="" />
            <div className="relative z-20 w-[522px]">
              <span className="font-semibold text-[24px] mb-[16px]">3D motion ролики</span>
              <p className="font-semibold text-[18px] text-opacity-18 mb-[50px]">
                We improve our clients marketing results with a data driven approach and we are hell-bent on making it awesome. Our goal is to create a new, data oriented quality of e-commerce experience by leveraging powerful real-time analytics.
              </p>
              <button className="font-semibold text-[18px] rounded-[100px] text-[#FF00F5] border-[2px] pt-[8px] pb-[8px] pr-[43px] pl-[43px] text-center border-[#FF00F5]">
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
