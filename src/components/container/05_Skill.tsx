import React from 'react';
import Image from 'next/image';

export default function Skill() {
  return (
    <section className='custom-container relative grid h-880 grid-cols-1 bg-amber-500 md:grid-cols-2'>
      <div>
        <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
          <Image
            src='/images/08_skill3.png'
            alt='html icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p>
          Building the structure of web pages with semantic markup for
          accessibility .
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/* layer 1 */}
      <div className='flex-between'>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/06_skill1.png'
            alt='CSS icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/07_skill2.png'
            alt='javascript icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/08_skill3.png'
            alt='html icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/09_skill4.png'
            alt='express js icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/10_skill5.png'
            alt='sequalize icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
      </div>
      {/* layer 2 */}
      <div className='flex-between translate-y-9'>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/11_skill6.png'
            alt='typescript icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/12_skill7.png'
            alt='ract js icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/13_skill8.png'
            alt='docker icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/14_skill9.png'
            alt='postgreSQL icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
        <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
          <Image
            src='/images/15_skill10.png'
            alt='mongo DB icon'
            width={26.24}
            height={30.81}
            className='w-26.24 h-30.81'
          />
        </p>
      </div>
    </section>
  );
}
