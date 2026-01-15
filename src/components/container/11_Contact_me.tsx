'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function ContactMe() {
  // state input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // fungsi submit ke WA
  const sendToWA = () => {
    const phone = '6282213114640'; // nomor WA kamu
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank'); // buka WA
  };

  return (
    <section className='custom-container h-auto pt-40 pb-64' id='contact'>
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
          <div className='flex space-x-16 hover:cursor-pointer'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/13_phone-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              />
            </div>
            <a
              href='https://wa.me/6282213114640?text=Hello%20Herfando, '
              target='_blank'
              rel='noopener noreferrer'
              className='flex'
            >
              <p className='text-md h-30 self-center md:text-lg'>
                +62-82213114640
              </p>
            </a>
          </div>
          {/* email */}
          <div className='flex space-x-16 hover:cursor-pointer'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/14_mail-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              />
            </div>
            <a
              href='https://compose.mail.yahoo.com/?to=herfando_91@yahoo.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex'
            >
              <p className='text-md h-30 self-center md:text-lg'>
                herfando_91@yahoo.com
              </p>
            </a>
          </div>
          {/* marker */}
          <div className='flex space-x-16 hover:cursor-pointer'>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#F3EBFF] md:h-48 md:w-48'>
              <Image
                src='/icons/15_marker-pin-01.png'
                alt='phone'
                width={11.67}
                height={16.67}
                className='w-11.67 h-16.67 md:h-24 md:w-24'
              />
            </div>
            <a
              href='https://www.google.com/maps/place/South+Sumatra,+Indonesia'
              target='_blank'
              rel='noopener noreferrer'
              className='flex'
            >
              <p className='text-md h-30 self-center md:text-lg'>
                South Sumatra, Indonesia
              </p>
            </a>
          </div>
        </div>

        {/* right coloumn */}
        <div className='h-494 w-361 p-32 font-semibold md:h-645 md:w-537 md:text-[24px]'>
          <h2>Send a Message</h2>

          <div className='pb-8'>
            <p className='md:text-md font-semibold'>Name</p>
            <input
              placeholder='Your Name'
              type='text'
              className='font-regular text-md h-56 w-473 rounded-2xl border border-[#E9EAEB] px-20 md:text-lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='pb-8'>
            <p className='md:text-md font-semibold'>Email</p>
            <input
              placeholder='Your Email'
              type='email'
              className='font-regular text-md h-56 w-473 rounded-2xl border border-[#E9EAEB] px-20 md:text-lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='pb-24'>
            <p className='md:text-md font-semibold'>Message</p>
            <input
              placeholder='Your Message'
              type='text'
              className='font-regular text-md h-180 w-473 rounded-2xl border border-[#E9EAEB] px-20 md:text-lg'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            className='h-56 w-473 cursor-pointer self-end rounded-full border border-[#2a9e8b] bg-white font-bold text-black hover:bg-[#2a9e8b] hover:text-white dark:bg-black dark:text-white dark:hover:bg-[#2a9e8b]'
            onClick={sendToWA}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
