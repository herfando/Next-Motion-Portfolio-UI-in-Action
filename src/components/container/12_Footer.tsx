import React from 'react';
import Image from 'next/image';
import { section } from 'framer-motion/client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className='bg-primary-dark custom-container flex h-auto w-full flex-col justify-between text-white dark:bg-black'>
      <div className='custom-container flex-between h-80 w-full md:h-96'>
        <div className='flex w-141 gap-8 text-lg font-semibold whitespace-nowrap hover:cursor-pointer hover:text-blue-800'>
          {/* 1.Image */}
          <Image
            src='/icons/01_logo.png'
            alt='logo'
            width={26.3}
            height={28.5}
            className='w-26.3 h-28.5 object-contain'
          />
          Your Logo
        </div>
        <div>© {year} Edwin Anderson. All rights reserved</div>
        <div className='flex'>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#410292]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/10_web.svg'
              alt='web'
              width={28.83}
              height={28.83}
            />
          </div>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#410292]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/11_instagram.svg'
              alt='instagram'
              width={28.83}
              height={28.83}
            />
          </div>
          <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#410292]'>
            <Image
              className='w-28.83 h-28.83'
              src='/icons/12_linkid.svg'
              alt='linkid'
              width={28.83}
              height={28.83}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
