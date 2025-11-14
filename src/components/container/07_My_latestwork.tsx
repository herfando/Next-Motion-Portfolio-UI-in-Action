import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MyLatestWork() {
  return (
    <section className='custom-container h-auto w-full pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Latest Work
      </h2>
      <div className='flex w-full flex-wrap justify-center gap-24 md:gap-0 md:gap-x-16 md:gap-y-40'>
        {/* Work 1 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/23_work1.png'
            alt='task management solution'
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
        {/* Work 2 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/24_work2.png'
            alt='magic studio demo'
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
        {/* Work 3 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/25_work3.png'
            alt='hotto to backbone healt'
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
        {/* Work 4 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/26_work4.png'
            alt='agriculture aplication'
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
        {/* Work 5 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/27_work5.png'
            alt='boxinside  for security locker '
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
        {/* Work 6 */}
        <div className='flex h-444 w-384 flex-col justify-between gap-24'>
          <div className='flex justify-between'>
            <div className='flex h-28 w-100 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-111 md:text-[14px]'>
              Dashboard
            </div>
            <div className='flex h-28 w-61 items-center justify-center self-center rounded-full border border-dashed border-[#A4A7AE] text-[12px] md:h-36 md:w-66 md:text-[14px]'>
              2024
            </div>
          </div>
          <Image
            src='/images/28_work6.png'
            alt='logo.lab'
            width={381}
            height={284}
            className='h-269.09 w-361 md:h-284 md:w-381'
          ></Image>
          <p className='text-[16px] font-semibold md:text-[20px]'>
            Dashboard SaaS Task Management
          </p>
          <Link href='#'>
            <div className='flex cursor-pointer rounded-md p-4 text-[14px] text-[#6600EB] transition hover:font-bold md:h-30 md:text-[16px]'>
              Visit Website
              <ArrowRight
                width={14}
                height={14}
                className='ml-5 h-14 w-14 self-center'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
