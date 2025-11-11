import { div } from 'framer-motion/client';
import React from 'react';
import { Mail, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

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

      {/* Coloumn 1 */}
      <div className='mt-40 flex space-x-20'>
        {/* Why Choosen Me */}
        <div className='relative space-y-20 overflow-hidden rounded-2xl bg-[rgba(225,123,14,1)] p-24 md:h-395 md:w-381 dark:bg-[rgba(245,210,170,1)]'>
          <p className='font-bold text-white md:text-[32px] dark:text-black'>
            Why Choose Me
          </p>
          <p className='md:text-md font-regular text-white dark:text-black'>
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
            <p className='h-36 w-119 content-center rounded-full bg-white text-center text-sm text-black dark:bg-black dark:text-white'>
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
        {/* Expert Skill */}
        <div className='relative space-y-15 overflow-hidden rounded-2xl bg-[#181D27] p-24 md:h-395 md:w-381 dark:bg-[#E6E8EC]'>
          <p className='font-bold text-white md:text-[32px] dark:text-black'>
            Expert Skill
          </p>
          <div className='flex gap-5'>
            <Star
              size={24}
              color='orange'
              className='w-22.83 h-21.8 fill-[#F3993F]'
            />
            <Star
              size={24}
              color='orange'
              className='w-22.83 h-21.8 fill-[#F3993F]'
            />
            <Star
              size={24}
              color='orange'
              className='w-22.83 h-21.8 fill-[#F3993F]'
            />
            <Star
              size={24}
              color='orange'
              className='w-22.83 h-21.8 fill-[#F3993F]'
            />
            <Star
              size={24}
              color='orange'
              className='w-22.83 h-21.8 fill-[#F3993F]'
            />
          </div>
          <p className='md:text-md font-regular text-white dark:text-black'>
            Mastering modern technologies to deliver impactful and efficient
            solutions
          </p>
          {/* layer 1 */}
          <div className='flex-between'>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/06_skill1.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/07_skill2.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/08_skill3.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/09_skill4.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/10_skill5.png'
                alt='typescript'
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
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/12_skill7.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/13_skill8.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/14_skill9.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/15_skill10.png'
                alt='typescript'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
          </div>
        </div>
        {/* 5+ Years Experience */}
        <div className='relative space-y-20 overflow-hidden rounded-2xl md:h-395 md:w-381'>
          <Image
            src='/images/16_5 years experience.png'
            alt='experience'
            width={381}
            height={395}
            className='h-395 w-381'
          />
          <div className='absolute inset-0 top-[25.822%] place-items-center font-bold text-white md:text-[40px] dark:text-black'>
            <p>5+ Years</p> <p>Experience</p>
          </div>
          <div className='flex'>
            <Image
              src='/images/17_experience.png'
              alt='experience1'
              width={95}
              height={71}
              className='absolute inset-0 top-[74.936%] left-[9.448%] h-71 w-95'
            />
            <Image
              src='/images/18_experience2.png'
              alt='experience1'
              width={95}
              height={71}
              className='absolute inset-0 top-[74.936%] left-[37.532%] h-71 w-95'
            />
            <Image
              src='/images/19_experience3.png'
              alt='experience1'
              width={95}
              height={71}
              className='absolute inset-0 top-[74.936%] left-[65.616%] h-71 w-95'
            />
          </div>
        </div>
      </div>

      {/* Coloumn 2 */}
      <div className='mt-40 flex gap-20'>
        {/* Why Choosen Me */}
        <div className='relative space-y-20 overflow-hidden rounded-2xl bg-[#6600EB] p-24 md:h-395 md:w-381 dark:bg-[#DCC6FF]'>
          <div className='translate-y-[40%] place-items-center -space-y-30 px-10 font-bold text-[#F39C3F] md:text-[71.63px] dark:text-black'>
            <p>EDWIN</p> <p>ANDERSON</p>
          </div>
          <Image
            className='absolute top-[2.784%] left-0 h-384 w-381'
            width={381}
            height={384}
            alt='image'
            src='/images/20_Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie 1.png'
          />
          {/* Button */}
          <Button className='absolute top-[82.939%] left-1/2 h-48 w-233 -translate-x-1/2 gap-8 rounded-full bg-white text-sm font-medium text-black hover:cursor-pointer lg:flex'>
            <Mail className='size-20' />
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}
