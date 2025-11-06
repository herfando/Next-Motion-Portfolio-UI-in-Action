import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-primary-dark flex h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <div className='flex-center h-195 w-1389 flex-nowrap bg-amber-400 pt-20 align-middle text-[150px] leading-195 font-extrabold tracking-[0] text-white md:pt-59'>
        EDWIN ANDERSON
      </div>
      {/* Picture */}
      <Image
        src='/images/Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie dekstop1.png'
        alt='Hero Image'
        width={554}
        height={801}
        className='flex-center absolute object-cover pt-115'
      />
      {/* Circle Graphic */}
      {/* Feature Card */}
      {/* Feature Card */}
      {/* Feature Card */}
    </section>
  );
}
