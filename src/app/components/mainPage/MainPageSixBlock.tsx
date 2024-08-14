import React from 'react';
import { Card } from '../../ui';

export const MainPageSixBlock = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  return (
    <section className="container">
      <div className='pt-[140px]'>
        <h2 className='font-raleway font-extrabold text-[110px]  leading-[6rem] '>Наши <br/>проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {arr.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
