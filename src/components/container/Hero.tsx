import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-primary-dark grid h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <div className='flex-center mx-auto h-56 w-371 flex-nowrap align-middle text-[40px] leading-56 font-extrabold tracking-[0] text-white md:h-195 md:w-1389 md:text-[150px] md:leading-195'>
        EDWIN ANDERSON
      </div>
      {/* Picture */}
      <Image
        src='/images/Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie dekstop1.png'
        alt='Hero Image'
        width={763}
        height={763}
        className='mx-auto object-contain md:block'
        style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
      />

      {/* Circle Graphic */}
      {/* Feature Card */}
      {/* Feature Card */}
      {/* Feature Card */}
    </section>
  );
}
