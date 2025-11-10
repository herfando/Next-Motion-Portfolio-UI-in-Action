import { div } from 'framer-motion/client';
import React from 'react';

export default function About() {
  return (
    <div className='custom-container relative z-3 h-1250 bg-white pt-40 md:pt-80 dark:bg-black'>
      <div className='space-y-10'>
        <p className='text-md font-semibold text-black md:text-lg dark:text-white'>
          Hi, I’m Edwin Anderson 👋
        </p>
        <p className='text-[20px] font-semibold text-black md:text-[32px] dark:text-white'>
          Building digital products with a focus on crafting visually engaging
          and seamless user interfaces using React.js.{' '}
          <span className='text-[rgba(164,167,174,1)]'>
            Prioritizing responsive design, performance optimization, and
            user-centric features to deliver exceptional web experiences.
          </span>
        </p>
      </div>
      <div className='mt-40'>
        {/* Why Choosen Me */}
        <div className='relative space-y-20 overflow-hidden rounded-2xl bg-[rgba(225,123,14,1)] p-24 md:h-395 md:w-381'>
          <p className='font-bold text-white md:text-[32px] dark:text-black'>
            Why Choose Me
          </p>
          <p className='md:text-md text-white dark:text-black'>
            Delivering excellence with innovative solutions and seamless
            execution.
          </p>
          {/* layer 1 */}
          <div className='absolute top-[50.126%] left-0 flex -translate-x-[13.22%] gap-10'>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React Expert
            </p>
            <p className='h-36 w-168 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Fullstack Developer
            </p>
            <p className='h-36 w-154 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Resposive Design
            </p>
          </div>
          {/* layer 2 */}
          <div className='absolute top-[63.29%] left-0 flex -translate-x-[13.22%] gap-10'>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React Expert
            </p>
            <p className='h-36 w-168 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React Expert
            </p>
            <p className='h-36 w-163 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              5 Years Experience
            </p>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React Expert
            </p>
          </div>
          {/* layer 3 */}
          <div className='absolute top-[76.455%] left-0 flex -translate-x-[13.22%] gap-10'>
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              React Expert
            </p>
            <p className='h-36 w-116 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Clean Code
            </p>
            <p className='h-36 w-206 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
              Performance Optimation
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
