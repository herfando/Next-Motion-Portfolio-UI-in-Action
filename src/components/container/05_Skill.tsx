import React from 'react';
import Image from 'next/image';

export default function Skill() {
  return (
    <section className='custom-container relative grid h-880 grid-cols-1 bg-amber-500 md:grid-cols-2'>
      {/* 1. HTML */}
      <div className='space-y-8'>
        <div className='flex gap-12'>
          <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
            <Image
              src='/images/08_skill3.png'
              alt='html icon'
              width={23.33}
              height={23.33}
              className='w-23.33 h-23.33'
            />
          </p>
          <p className='self-center text-[18px] font-semibold'>HTML</p>
        </div>
        <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
          Building the structure of web pages with semantic markup for
          accessibility .
        </p>
      </div>
      {/* 2.CSS */}
      <div className='space-y-8'>
        <div className='flex gap-12'>
          <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
            <Image
              src='/images/08_skill3.png'
              alt='html icon'
              width={23.33}
              height={23.33}
              className='w-23.33 h-23.33'
            />
          </p>
          <p className='self-center text-[18px] font-semibold'>HTML</p>
        </div>
        <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
          Building the structure of web pages with semantic markup for
          accessibility .
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
