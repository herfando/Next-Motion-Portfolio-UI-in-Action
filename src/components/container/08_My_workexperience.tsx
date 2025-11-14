import React from 'react';

export default function MyWorkExperience() {
  return (
    <section className='custom-container flex h-auto w-full flex-col justify-center pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Work Experience
      </h2>
      <div className='flex h-972 w-full justify-center bg-amber-500 md:h-578'>
        <div></div>
        <div>
          <h3 className='font-semibold text-black md:text-[20px] dark:text-white'>
            Frontend Developer
          </h3>
          <p className='md:tet-[16px] text-gray-800'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
