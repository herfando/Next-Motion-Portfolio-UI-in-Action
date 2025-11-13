import React from 'react';
import { Check, X } from 'lucide-react';

export default function WhyChooseMe() {
  return (
    <section className='custom-container h-auto w-full pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='text-center text-[48px] font-bold'>Why Choose Me</h2>
      {/* Header */}
      <div className='grid h-56 w-full grid-cols-3 items-center rounded-full bg-[#8B32FF] text-lg text-white dark:bg-white dark:text-black'>
        <p className='text-center'>Skill</p>
        <p className='text-center'>Me</p>
        <p className='text-center'>Other</p>
      </div>
      {/* React */}
      <div className='grid h-72 grid-cols-3 items-center text-lg text-black dark:text-white'>
        <p className='text-center'>React Expert</p>
        <div className='flex justify-center'>
          <div className='flex h-28 w-28 items-center justify-center rounded-full bg-[#E17B0E] text-white'>
            <Check strokeWidth={3} className='h-16 w-16' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex h-28 w-28 items-center justify-center rounded-full bg-[#A4A7AE] text-white'>
            <X strokeWidth={3} className='h-16 w-16' />
          </div>
        </div>
      </div>
      <div className='w-full border-b border-[#D5D7DA]'></div>
    </section>
  );
}
