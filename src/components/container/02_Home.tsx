'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';
import MotionWrapper from '../ui/motion-wrapper';
import { Star } from 'lucide-react';
import { section } from 'framer-motion/client';

export default function Home() {
  const stars = Array(5).fill(null);
  const avatars = [
    '02_Male Avatar',
    '03_Female Avatar',
    '04_Male Avatar',
    '05_Female Avatar',
  ];

  return (
    <section className='bg-primary-dark relative grid h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <MotionWrapper
        asChild
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <div className='flex-center absolute top-[3.22%] left-1/2 z-5 h-56 w-full -translate-x-[50%] align-middle text-[clamp(40px,10vw,150px)] leading-56 font-extrabold tracking-[0] whitespace-nowrap text-white md:top-[7.6%] md:h-195 md:leading-195'>
          EDWIN ANDERSON
        </div>
      </MotionWrapper>

      {/* Picture Hero */}
      <Image
        src='/images/01_Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie dekstop.png'
        alt='Hero Image'
        width={763}
        height={763}
        className='absolute top-[32.85%] left-1/2 z-9 -translate-x-[50%] object-contain pb-0 md:top-[14.3%] md:block md:-translate-x-[54.4%] md:pb-75'
        style={{ height: 'clamp(26.5rem, 52.99vw, 47.69rem)' }}
      />

      {/* Circle Graphics */}
      {[
        {
          z: 4,
          top: '60.54%',
          color: '#6600EBCC',
          dark: '#B388FFCC',
          size: '13.49rem, 45.20vw, 22.63rem',
        },
        {
          z: 3,
          top: '46.89%',
          color: '#6600EB99',
          dark: '#B388FF99',
          size: '21.64rem, 72.49vw, 36.30rem',
        },
        {
          z: 2,
          top: '33.24%',
          color: '#6600EB66',
          dark: '#B388FF66',
          size: '29.79rem, 99.80vw, 49.96rem',
        },
        {
          z: 1,
          top: '19.6%',
          color: '#6600EB33',
          dark: '#B388FF33',
          size: '37.94rem, 127.09vw, 63.63rem',
        },
      ].map(({ z, top, color, dark, size }, i) => (
        <div
          key={i}
          style={{
            width: `clamp(${size})`,
            height: `clamp(${size})`,
          }}
          className={`absolute top-[${top}] left-1/2 z-${z} -translate-x-[50%] rounded-full bg-[${color}] dark:bg-[${dark}]`}
        />
      ))}

      {/* Feature Card 1 */}
      <MotionWrapper
        asChild
        initial={{ rotate: 5 }}
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Card className='absolute top-[16.908%] right-1/2 h-136 w-144 translate-x-[19.427%] space-y-5 p-10 md:top-[39.07%] md:h-192 md:w-200 md:-translate-x-[100.69%] md:space-y-10 md:p-20'>
          <p className='text-[24px] font-bold md:text-[40px]'>5.0</p>
          <div className='flex-between'>
            {stars.map((_, i) => (
              <Star
                key={i}
                size={24}
                color='orange'
                className='w-22.83 h-21.8 fill-[#F3993F]'
              />
            ))}
          </div>
          <p className='text-xs md:text-sm'>Many Client Trust with me</p>
        </Card>
      </MotionWrapper>

      {/* Feature Card 2 */}
      <MotionWrapper
        asChild
        initial={{ rotate: -5 }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Card className='absolute top-[65.056%] right-1/2 h-80 w-166 -translate-x-[14.924%] p-20 md:top-[71.54%] md:h-104 md:w-283 md:-translate-x-[73.498%]'>
          <p className='text-[14px] font-bold whitespace-nowrap md:text-[24px]'>
            Frontend Developer
          </p>
          <div className='flex gap-2'>
            <Image
              src='/icons/03_ceklist.svg'
              width={13.89}
              height={13.89}
              alt='ceklist'
              className='w-13.89 h-13.89 dark:invert'
            />
            <p className='text-sm'>React Expert</p>
          </div>
        </Card>
      </MotionWrapper>

      {/* Feature Card 3 */}
      <MotionWrapper
        asChild
        initial={{ rotate: 5 }}
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <Card className='absolute top-[58.454%] left-1/2 h-136 w-148 translate-x-[55.047%] space-y-5 p-10 md:top-[60.897%] md:h-192 md:w-208 md:translate-x-[110.09%] md:space-y-10 md:p-20'>
          <p className='text-[24px] font-bold md:text-[40px]'>50+</p>
          <p className='text-xs md:text-sm'>Global Clients</p>
          <div className='flex -space-x-10'>
            {avatars.map((name, i) => (
              <Image
                key={i}
                src={`/images/${name}.png`}
                width={52}
                height={52}
                alt={`Avatar ${i + 1}`}
                className='h-40 w-40 md:h-52 md:w-52'
              />
            ))}
          </div>
        </Card>
      </MotionWrapper>
    </section>
  );
}
