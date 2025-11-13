import React from 'react';
import Image from 'next/image';
import ProgressBar from '../ui/motion-progressbar';

export default function Skill() {
  return (
    <section>
      <div className='pt-40 pb-48 text-center text-[48px] font-bold dark:text-white'>
        My Profesional Skill
      </div>
      <div className='custom-container relative grid h-880 grid-cols-1 place-items-center gap-20 md:grid-cols-2'>
        {/* 1. HTML */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[0_0_10px_#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/08_html.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>HTML</p>
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        {/* 2.CSS */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/06_css.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>CSS</p>
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        {/* 3.Javascript */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/07_js.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>Javascript</p>
            <ProgressBar percentage={90} duration={2} />
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        {/* 4.React JS */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/12_reactjs.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>React JS</p>
            <ProgressBar percentage={90} duration={2} />
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        {/* 5.Mongo DB */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/15_mongoDB.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>Mongo DB</p>
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        {/* 6.Docker */}
        <div className='h-184 w-582 space-y-8 rounded-2xl p-16 shadow-[#A5A5A533]'>
          <div className='flex gap-12'>
            <p className='dark:black grid h-[52.58] w-[52.58] place-items-center rounded-full bg-[#F5F5F5]'>
              <Image
                src='/images/13_docker.png'
                alt='html icon'
                width={23.33}
                height={23.33}
                className='w-23.33 h-23.33'
              />
            </p>
            <p className='self-center text-[18px] font-semibold'>Docker</p>
          </div>
          <p className='text-[rgba(65,70,81,1)] md:text-[16px]'>
            Building the structure of web pages with semantic markup for
            accessibility .
          </p>
          <ProgressBar percentage={90} duration={2} />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
