'use client';
import React from 'react';
import { Mail, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function About() {
  return (
    <div className='custom-container relative z-3 h-2430 w-full bg-white pt-40 md:h-1250 md:pt-80 dark:bg-black'>
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
      <div className='mt-40 grid grid-cols-1 justify-items-center gap-20 md:grid-cols-3'>
        {/* Why Choosen Me */}
        <div className='relative h-374 w-361 space-y-20 overflow-hidden rounded-2xl bg-[rgba(225,123,14,1)] p-24 md:h-395 md:w-381 dark:bg-[rgba(160,90,30,1)]'>
          <p className='font-bold text-white md:text-[32px]'>Why Choose Me</p>
          <p className='md:text-md font-regular text-white'>
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
        <div className='relative h-374 w-361 space-y-15 overflow-hidden rounded-2xl bg-[#181D27] p-24 md:h-395 md:w-381 dark:bg-[#0F141C]'>
          <p className='font-bold text-white md:text-[32px]'>Expert Skill</p>
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
          <p className='md:text-md font-regular text-white'>
            Mastering modern technologies to deliver impactful and efficient
            solutions
          </p>
          {/* layer 1 */}
          <div className='flex-between'>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/06_css.png'
                alt='CSS icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/07_js.png'
                alt='javascript icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/08_html.png'
                alt='html icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/09_expressjs.png'
                alt='express js icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/10_sequalize.png'
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
                src='/images/11_ts.png'
                alt='typescript icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/12_reactjs.png'
                alt='ract js icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/13_docker.png'
                alt='docker icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/14_postgreSQL.png'
                alt='postgreSQL icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
            <p className='grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#252B37] dark:bg-white'>
              <Image
                src='/images/15_mongoDB.png'
                alt='mongo DB icon'
                width={26.24}
                height={30.81}
                className='w-26.24 h-30.81'
              />
            </p>
          </div>
        </div>
        {/* 5+ Years Experience */}
        <div className='relative h-374 w-361 space-y-20 overflow-hidden rounded-2xl md:h-395 md:w-381'>
          <Image
            src='/images/16_5 years experience.png'
            alt='experience'
            width={381}
            height={395}
            className='h-374 w-361 md:h-395 md:w-381'
          />
          <div className='absolute inset-0 top-[25.822%] place-items-center text-[32px] font-bold text-white md:text-[40px] dark:text-black'>
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
      <div className='mt-40 grid grid-cols-1 justify-items-center gap-20 md:grid-cols-[381_783]'>
        {/* Edwin Anderson */}
        <div className='relative h-374 w-361 space-y-20 overflow-hidden rounded-2xl bg-[#6600EB] p-24 md:h-395 md:w-381 dark:bg-[#2B1548]'>
          <div className='translate-y-[40%] place-items-center -space-y-30 px-10 text-[64px] font-bold text-[#F39C3F] md:text-[71.63px] dark:text-white'>
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
          <Button className='absolute top-[82.939%] left-1/2 h-48 w-233 -translate-x-1/2 gap-8 rounded-full bg-white text-sm font-medium text-black hover:cursor-pointer lg:flex dark:bg-black dark:text-white'>
            <Mail className='size-20' />
            Hire Me
          </Button>
        </div>
        {/* Building Digital Products */}
        <div className='relative h-452 w-361 space-y-20 overflow-hidden rounded-2xl bg-linear-to-r from-[#002C6E] to-[#0C4EAF] px-18 py-32 md:h-395 md:w-783 md:p-24 dark:from-[#00142E] dark:to-[#002B5B]'>
          <div className='text-[28px] font-bold text-white md:text-[32px]'>
            <p>Building Digital</p>
            <p className='flex gap-5'>
              Products
              <Image
                src='/icons/05_magicwand.svg'
                alt='magicwand'
                width={20}
                height={20}
                className='h-20 w-20 self-center'
              ></Image>
            </p>
            {/* Maps */}
            <Image
              src='/images/21_Round Pixel World Map.svg'
              alt='pixel world map'
              width={657.6}
              height={411}
              className='w-657.6 absolute top-0 left-[30.779%] hidden h-411 self-center pr-113 pb-20 md:block'
            ></Image>
            <Image
              src='/images/22_Round Pixel World Map-mobile.svg'
              alt='pixel world map'
              width={365}
              height={367}
              className='absolute top-[18.14%] left-0 block h-367 w-365 self-center md:hidden'
            ></Image>
          </div>
          {/* Detail Achievement */}
          <div className='absolute flex flex-col space-y-28 space-x-39 text-white md:top-[68.607%] md:left-[4.086%] md:flex-row'>
            <p className='text-[36px] font-bold md:text-[48px]'>
              50+
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Global Client’s Handle
              </span>
            </p>
            <p className='text-[36px] font-bold md:text-[48px]'>
              99%
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Client Satisfaction Rate
              </span>
            </p>
            <p className='text-[36px] font-bold md:text-[48px]'>
              100+
              <span className='block text-[14px] font-medium md:text-[18px]'>
                Project Delivered
              </span>
            </p>
          </div>
          {/* Flag Country */}
          {/* Indonesia */}
          <div className='absolute top-[75.66%] left-[72.022%] flex space-x-4 md:top-[61.518%] md:left-[87.739%]'>
            <Image
              src='/icons/06_Flag Indonesia.png'
              alt='flag indonesia'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div>
          {/* USA */}
          <div className='top:left-[81.864%] absolute top-[46.017%] left-[77.285%] flex space-x-4 md:top-[27.088%]'>
            <Image
              src='/icons/07_Flag USA.png'
              alt='flag USA'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div>
          {/* Germany */}
          <div className='absolute top-[29.20%] left-[50.969%] flex space-x-4 md:top-[33.924%] md:left-[40.996%]'>
            <Image
              src='/icons/08_Flag Germany.png'
              alt='flag Germany'
              width={50}
              height={16.38}
              className='h-16.38 w-50'
            ></Image>
            <Image
              src='/icons/09_Frame 1618873380.svg'
              alt='dot'
              width={10.67}
              height={10.67}
              className='h-10.67 w-10.67 self-start'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
