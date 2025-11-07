import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-primary-dark grid h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <div className='flex-center mx-auto mt-59 h-56 w-371 flex-nowrap align-middle text-[40px] leading-56 font-extrabold tracking-[0] text-white md:h-195 md:w-1389 md:text-[150px] md:leading-195'>
        EDWIN ANDERSON
      </div>
      {/* Picture */}
      <Image
        src='/images/Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie dekstop1.png'
        alt='Hero Image'
        width={763}
        height={763}
        className='absolute top-[32.85%] left-1/2 -translate-x-[50%] object-contain md:top-[14.3%] md:block md:-translate-x-[54.4%]'
        style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
      />

      {/* Circle Graphic */}
      {/* Feature Card */}
      {/* Feature Card */}
      {/* Feature Card */}
    </section>
  );
}
