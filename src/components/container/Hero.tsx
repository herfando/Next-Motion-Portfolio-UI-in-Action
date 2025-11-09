import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';
import { BitcoinIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className='bg-primary-dark relative grid h-621 w-full justify-center md:h-801 dark:bg-black'>
      {/* Name */}
      <div className='flex-center absolute top-[3.22%] left-1/2 z-5 h-56 w-full -translate-x-[50%] align-middle text-[clamp(40px,10vw,150px)] leading-56 font-extrabold tracking-[0] whitespace-nowrap text-white md:top-[7.6%] md:h-195 md:leading-195'>
        EDWIN ANDERSON
      </div>
      {/* Picture Hero*/}
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
        className='absolute top-[60.54%] left-1/2 z-4 -translate-x-[50%] rounded-full bg-[#6600EBCC] dark:bg-[#B388FFCC]'
      ></div>
      <div
        style={{
          width: 'clamp(21.64rem, 72.49vw, 36.30rem)',
          height: 'clamp(21.64rem, 72.49vw, 36.30rem)',
        }}
        className='absolute top-[46.89%] left-1/2 z-3 -translate-x-[50%] rounded-full bg-[#6600EB99] dark:bg-[#B388FF99]'
      ></div>
      <div
        style={{
          width: 'clamp(29.79rem, 99.80vw, 49.96rem)',
          height: 'clamp(29.79rem, 99.80vw, 49.96rem)',
        }}
        className='absolute top-[33.24%] left-1/2 z-2 -translate-x-[50%] rounded-full bg-[#6600EB66] dark:bg-[#B388FF66]'
      ></div>
      <div
        style={{
          width: 'clamp(37.94rem, 127.09vw, 63.63rem)',
          height: 'clamp(37.94rem, 127.09vw, 63.63rem)',
        }}
        className='absolute top-[19.6%] left-1/2 z-1 h-[1018] w-[1018] -translate-x-[50%] rounded-full bg-[#6600EB33] dark:bg-[#B388FF33]'
      ></div>

      {/* Feature Card 1 */}
      <Card className='absolute top-[16.908%] right-1/2 h-136 w-144 translate-x-[19.427%] space-y-5 p-10 md:top-[39.07%] md:h-192 md:w-200 md:-translate-x-[100.69%] md:space-y-10 md:p-20'>
        <p className='text-[24px] font-bold md:text-[40px]'>5.0</p>
        <div className='flex'>
          <Image
            src='/icons/03_star.svg'
            alt='star icon'
            width={24}
            height={24}
            className='mx-1'
          />
          <Image
            src='/icons/03_star.svg'
            alt='star icon'
            width={24}
            height={24}
            className='mx-1'
          />
          <Image
            src='/icons/03_star.svg'
            alt='star icon'
            width={24}
            height={24}
            className='mx-1'
          />
          <Image
            src='/icons/03_star.svg'
            alt='star icon'
            width={24}
            height={24}
            className='mx-1'
          />
          <Image
            src='/icons/03_star.svg'
            alt='star icon'
            width={24}
            height={24}
            className='mx-1'
          />
        </div>
        <p className='text-xs md:text-sm'>Many Client Trust with me</p>
      </Card>

      {/* Feature Card 2 */}
      <Card className='absolute top-[65.056%] right-1/2 h-80 w-166 -translate-x-[14.924%] p-20 md:top-[71.54%] md:h-104 md:w-283 md:-translate-x-[73.498%]'>
        <p className='text-[14px] font-bold whitespace-nowrap md:text-[24px]'>
          Frontend Developer
        </p>
        <div className='flex gap-2'>
          <Image
            src='/icons/04_ceklist.svg'
            width={13.89}
            height={13.89}
            alt='ceklist'
            className='w-13.89 h-13.89 dark:invert'
          ></Image>
          <p className='text-sm'>React Expert</p>
        </div>
      </Card>
      {/* Feature Card 3 */}
      <Card className='absolute top-[58.454%] left-1/2 h-136 w-148 translate-x-[55.047%] space-y-5 p-10 md:top-[60.897%] md:h-192 md:w-208 md:translate-x-[110.09%] md:space-y-10 md:p-20'>
        <p className='text-[24px] font-bold md:text-[40px]'>50+</p>
        <p className='text-xs md:text-sm'>Global Clients</p>
        <div className='flex -space-x-10'>
          <Image
            src='/images/02_Male Avatar.png'
            width={52}
            height={52}
            alt='Male avatar1'
            className='h-40 w-40 md:h-52 md:w-52'
          ></Image>
          <Image
            src='/images/03_Female Avatar.png'
            width={52}
            height={52}
            alt='Male avatar1'
            className='h-40 w-40 md:h-52 md:w-52'
          ></Image>
          <Image
            src='/images/04_Male Avatar.png'
            width={52}
            height={52}
            alt='Male avatar1'
            className='h-40 w-40 md:h-52 md:w-52'
          ></Image>
          <Image
            src='/images/05_Female Avatar.png'
            width={52}
            height={52}
            alt='Male avatar1'
            className='h-40 w-40 md:h-52 md:w-52'
          ></Image>
        </div>
      </Card>

      {/* Skill */}
      <div className='flex-center absolute top-full z-9 h-84 w-full gap-[22.3] bg-black text-[24px] font-bold whitespace-nowrap text-white md:h-[140] md:text-[48px] dark:bg-white dark:text-black'>
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
    </section>
  );
}
