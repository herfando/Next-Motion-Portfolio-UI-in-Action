import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MyLatestWork() {
  return (
    <section className='custom-container h-auto w-full pt-40 pb-40 md:pt-80 md:pb-80'>
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Latest Work
      </h2>
      <div>
        <div>
          <label htmlFor='#'>Dashboard</label>
        </div>
        <Image
          src='/images/23_work1.png'
          alt='task management solution'
          width={381}
          height={284}
          className='h-284 w-381'
        ></Image>
        <p>Dashboard SaaS Task Management</p>
        <Link href='#'>
          <div className='cursor-pointer rounded-md p-4 text-[#6600EB] transition hover:font-bold'>
            Ini Link Dummy
          </div>
        </Link>
      </div>
    </section>
  );
}
