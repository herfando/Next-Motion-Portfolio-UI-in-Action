import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-primary-dark relative grid h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <div className='flex-center absolute top-[3.22%] left-1/2 z-5 h-56 w-full -translate-x-[50%] align-middle text-[clamp(40px,10vw,150px)] leading-56 font-extrabold tracking-[0] whitespace-nowrap text-white md:top-[7.6%] md:h-195 md:leading-195'>
        EDWIN ANDERSON
      </div>
      {/* Picture */}
      <Image
        src='/images/Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie dekstop1.png'
        alt='Hero Image'
        width={763}
        height={763}
        className='absolute top-[32.85%] left-1/2 z-6 -translate-x-[50%] object-contain pb-80 md:top-[14.3%] md:block md:-translate-x-[54.4%]'
        style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
      />

      {/* Circle Graphic */}
      <div className='absolute top-[60.54%] left-1/2 z-4 h-[362.11] w-[362.11] -translate-x-[50%] rounded-full bg-[#6600EBCC]'></div>
      <div className='absolute top-[46.89%] left-1/2 z-3 h-[580.74] w-[580.74] -translate-x-[50%] rounded-full bg-[#6600EBCC]'></div>
      <div className='absolute top-[33.24%] left-1/2 z-2 h-[799.37] w-[799.37] -translate-x-[50%] rounded-full bg-[#6600EBCC]'></div>
      <div className='absolute top-[19.6%] left-1/2 z-1 h-[1018] w-[1018] -translate-x-[50%] rounded-full bg-[#6600EBCC]'></div>
      {/* Feature Card */}
      {/* Feature Card */}
      {/* Feature Card */}
    </section>
  );
}
