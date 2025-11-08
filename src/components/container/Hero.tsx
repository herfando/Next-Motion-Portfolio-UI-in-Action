import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';

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
        className='absolute top-[32.85%] left-1/2 z-9 -translate-x-[50%] object-contain pb-0 md:top-[14.3%] md:block md:-translate-x-[54.4%] md:pb-75'
        style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
      />

      {/* Circle Graphic */}
      <div
        style={{
          height: 'clamp(13.49rem, 45.20vw, 22.63rem)',
          width: 'clamp(13.49rem, 45.20vw, 22.63rem)',
        }}
        className='absolute top-[60.54%] left-1/2 z-4 -translate-x-[50%] rounded-full bg-[#6600EBCC]'
      ></div>
      <div
        style={{
          width: 'clamp(21.64rem, 72.49vw, 36.30rem)',
          height: 'clamp(21.64rem, 72.49vw, 36.30rem)',
        }}
        className='absolute top-[46.89%] left-1/2 z-3 -translate-x-[50%] rounded-full bg-[#6600EB99]'
      ></div>
      <div
        style={{
          width: 'clamp(29.79rem, 99.80vw, 49.96rem)',
          height: 'clamp(29.79rem, 99.80vw, 49.96rem)',
        }}
        className='absolute top-[33.24%] left-1/2 z-2 -translate-x-[50%] rounded-full bg-[#6600EB66]'
      ></div>
      <div
        style={{
          width: 'clamp(37.94rem, 127.09vw, 63.63rem)',
          height: 'clamp(37.94rem, 127.09vw, 63.63rem)',
        }}
        className='absolute top-[19.6%] left-1/2 z-1 h-[1018] w-[1018] -translate-x-[50%] rounded-full bg-[#6600EB33]'
      ></div>
      {/* Feature Card */}
      <Card className='absolute top-[39.07%] right-1/2 h-192 w-200 -translate-x-[50%]'>
        selamat pagi
      </Card>

      {/* Feature Card */}
      {/* Feature Card */}

      {/* Skill */}
      <div className='flex-center absolute top-full z-7 h-84 w-full gap-[22.3] bg-black text-[24px] font-bold whitespace-nowrap text-white md:h-[140] md:text-[48px] dark:bg-white dark:text-black'>
        <Image
          src='/icons/sharp_rectangle.png'
          alt='icons'
          width={48}
          height={52.5}
          className='h-35 w-32 md:h-52.5 md:w-48'
        ></Image>
        <h1>Frontend Developer</h1>
        <Image
          src='/icons/sharp_rectangle.png'
          alt='icons'
          width={48}
          height={52.5}
          className='h-35 w-32 md:h-52.5 md:w-48'
        ></Image>
        <h1>Expert React</h1>
        <Image
          src='/icons/sharp_rectangle.png'
          alt='icons'
          width={48}
          height={52.5}
          className='h-35 w-32 md:h-52.5 md:w-48'
        ></Image>
        <h1>Programmers</h1>
        <Image
          src='/icons/sharp_rectangle.png'
          alt='icons'
          width={48}
          height={52.5}
          className='h-35 w-32 md:h-52.5 md:w-48'
        ></Image>
        <h1>Mobile Developers</h1>
      </div>
    </section>
  );
}
