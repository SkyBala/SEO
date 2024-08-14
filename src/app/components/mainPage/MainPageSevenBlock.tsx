import React from 'react';
import { PartnerCard } from '../../ui';

export const MainPageSevenBlock = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="container h-[341px] mt-[100px] mb-[100px]">
        <div className='grid grid-cols-2  font-raleway text-start mb-[50px]'>
            <h2 className='text-[54px] font-bold'>Our partners</h2>
            <span className='ml-[100px] text-[18px] font-semibold'>We improve our clients marketing results with a <br/>data driven approach and we are hell-bent on<br/> making it awesome</span>
        </div>
        <div className='grid grid-cols-4 gap-6'>
              {arr.map((i) => (
        <PartnerCard key={i} />
      ))}
        </div>
    
    </section>
  );
};
