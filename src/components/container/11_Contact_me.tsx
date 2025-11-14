import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function ContactMe() {
  return (
    <section className='custom-container h-auto pt-40 pb-64'>
      <div className='flex flex-wrap justify-between space-y-20'>
        {/* left coloumn */}
        <div className='h-336 w-361 space-y-24 md:h-422 md:w-453 md:space-y-32'>
          <h2 className='text-[32px] font-bold md:text-[48px]'>
            I've been waiting for you.
          </h2>
          <p className='text-md md:text-lg'>
            Fill in the form or Send us an email
          </p>
          {/* handphone */}
          <div className='flex space-x-16'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/13_phone-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              ></Image>
            </div>
            <p className='text-md h-30 self-center md:text-lg'>
              +62 1234567890
            </p>
          </div>
          {/* email */}
          <div className='flex space-x-16'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/14_mail-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              ></Image>
            </div>
            <p className='text-md h-30 self-center md:text-lg'>
              edwinanderson@email.com
            </p>
          </div>
          {/* marker */}
          <div className='flex space-x-16'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/15_marker-pin-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              ></Image>
            </div>
            <p className='text-md h-30 self-center md:text-lg'>
              Jakarta, Indonesia
            </p>
          </div>
        </div>
        {/* right coloumn */}
        <div className='h-494 w-361 p-32 font-semibold md:h-645 md:w-537 md:text-[24px]'>
          <h2>Send a Message</h2>
          <div className='pb-8'>
            <p className='md:text-md font-semibold'>Name</p>
            <div className='h-56 w-473 rounded-2xl border border-[#E9EAEB]'></div>
          </div>
          <div className='pb-8'>
            <p className='md:text-md font-semibold'>Email</p>
            <div className='h-56 w-473 rounded-2xl border border-[#E9EAEB]'></div>
          </div>
          <div className='pb-24'>
            <p className='md:text-md font-semibold'>Message</p>
            <div className='h-180 w-473 rounded-2xl border border-[#E9EAEB]'></div>
          </div>
          <Button className='h-56 w-473 self-end rounded-full bg-[#6600EB] text-black dark:text-white'>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
