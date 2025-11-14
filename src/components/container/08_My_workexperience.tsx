import React from 'react';
import Image from 'next/image';

export default function MyWorkExperience() {
  return (
    <section className='custom-container flex h-auto w-full flex-col justify-center pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Work Experience
      </h2>
      <div className='relative grid h-972 w-full grid-cols-2 justify-center space-y-64 md:h-578 md:grid-cols-[152_80_55_1fr]'>
        {/* Trustpilot */}
        {/* colom 1 */}
        <div className='w-152 space-y-12'>
          <Image
            src='/images/29_trustpilot.png'
            alt='trustpilot company'
            width={152}
            height={48}
            className='h-48 w-152 object-contain'
          />
          <p className='font-semibold md:text-xl'>Trustpilot</p>
          <p className='md: text-md'>2021-2024</p>
        </div>
        {/* colom 2 */}
        <div></div>
        {/* colom 3 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#8B32FF]'></div>
          </div>
        </div>
        {/* colom 4 */}
        <div>
          <h3 className='content-center font-semibold text-black md:h-40 md:text-[20px] dark:text-white'>
            Frontend Developer
          </h3>
          <p className='md:tet-[16px] h-90 content-end text-gray-800'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </p>
        </div>
        {/* Postman */}
        {/* colom 1 */}
        <div className='w-152 space-y-12'>
          <Image
            src='/images/30_postman.png'
            alt='postman company'
            width={152}
            height={48}
            className='h-48 w-152 object-contain'
          />
          <p className='font-semibold md:text-xl'>Postman</p>
          <p className='md: text-md'>2021-2024</p>
        </div>
        {/* colom 2 */}
        <div></div>
        {/* colom 3 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#8B32FF]'></div>
          </div>
        </div>
        {/* colom 4 */}
        <div>
          <h3 className='content-center font-semibold text-black md:h-40 md:text-[20px] dark:text-white'>
            Frontend Developer
          </h3>
          <p className='md:tet-[16px] h-90 content-end text-gray-800'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </p>
        </div>
        {/* Spotify */}
        {/* colom 1 */}
        <div className='w-152 space-y-12'>
          <Image
            src='/images/31_spotify.png'
            alt='Spotify company'
            width={152}
            height={48}
            className='h-48 w-152 object-contain'
          />
          <p className='font-semibold md:text-xl'>Spotify</p>
          <p className='md: text-md'>2021-2024</p>
        </div>
        {/* colom 2 */}
        <div></div>
        {/* colom 3 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#8B32FF]'></div>
          </div>
        </div>
        {/* colom 4 */}
        <div>
          <h3 className='content-center font-semibold text-black md:h-40 md:text-[20px] dark:text-white'>
            Frontend Developer
          </h3>
          <p className='md:tet-[16px] h-90 content-end text-gray-800'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </p>
        </div>
        {/* garis */}
        <div className='absolute top-[7.299%] left-[21.2837%] z-0 h-364 w-100 border-l border-dashed border-[#A4A7AE]'></div>
      </div>
    </section>
  );
}
