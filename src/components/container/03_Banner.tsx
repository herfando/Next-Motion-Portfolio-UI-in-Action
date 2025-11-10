'use client';

import React from 'react';
import MotionWrapper from '../ui/motion-wrapper';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='h-11xl relative z-9 bg-[linear-gradient(180deg,rgba(22,1,49,1)_0%,rgba(22,1,49,1)_50%,white_50%,white_100%)] dark:bg-[linear-gradient(180deg,black_0%,black_100%)]'>
      {/* Skill */}
      <MotionWrapper
        asChild
        initial={{ rotate: 0 }}
        animate={{ rotate: -1.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className='flex-center top-full z-9 h-84 w-full -translate-y-0 gap-[22.3] bg-black text-[24px] font-bold whitespace-nowrap text-white md:h-[140] md:-translate-y-20 md:text-[48px] dark:bg-white dark:text-black'>
          <Image
            src='/icons/05_sharp_rectangle.png'
            alt='icons'
            width={48}
            height={52.5}
            className='h-35 w-32 md:h-52.5 md:w-48'
          ></Image>
          <h1>Frontend Developer</h1>
          <Image
            src='/icons/05_sharp_rectangle.png'
            alt='icons'
            width={48}
            height={52.5}
            className='h-35 w-32 md:h-52.5 md:w-48'
          ></Image>
          <h1>Expert React</h1>
          <Image
            src='/icons/05_sharp_rectangle.png'
            alt='icons'
            width={48}
            height={52.5}
            className='h-35 w-32 md:h-52.5 md:w-48'
          ></Image>
          <h1>Programmers</h1>
          <Image
            src='/icons/05_sharp_rectangle.png'
            alt='icons'
            width={48}
            height={52.5}
            className='h-35 w-32 md:h-52.5 md:w-48'
          ></Image>
          <h1>Mobile Developers</h1>
        </div>
      </MotionWrapper>
    </div>
  );
}
