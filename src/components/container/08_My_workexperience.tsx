import React from 'react';
import Image from 'next/image';

export default function MyWorkExperience() {
  return (
    <section
      className='custom-container flex h-auto w-full flex-col justify-center pt-150 pb-60 md:pt-80 md:pb-80'
      id='experience'
    >
      {/* Title */}
      <h2 className='pb-40 text-center text-[32px] font-bold md:pb-48 md:text-[48px]'>
        My Work Experience
      </h2>
      <div className='relative grid w-full grid-cols-[40_1fr] justify-center gap-y-40 md:grid-cols-[152_80_1fr] md:gap-y-40'>
        {/* WPH */}
        {/* colom 1 */}
        <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/29_wph.svg'
            alt='wph company'
            width={152}
            height={48}
            className='h-48 w-130 object-contain'
          />
          <p className='font-semibold md:text-xl'>Freelance</p>
          <p className='md: text-md'>2021-Present</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Freelance Full-Stack Developer
          </h3>
          <p className='text-10 content-end text-gray-800 md:text-[16px]'>
            • Developed backend services using Node.js, integrating PostgreSQL,
            MongoDB, AWS, Supabase, and Railway <br />• Designed and implemented
            RESTful APIs with structured documentation using Swagger <br />•
            Built responsive web applications using React.js, Next.js, and
            Tailwind CSS <br />• Developed cross-platform mobile applications
            using React Native <br />• Implemented modern state management
            solutions including Redux Toolkit, Zustand, and Context API using
            React Native <br />• Managed asynchronous data fetching using Axios
            and TanStack Query
            <br />• Implemented smooth UI animations using Framer Motion to
            enhance user interaction <br />• Configured Google Search Console
            for SEO monitoring, sitemap submission, and indexing.
            <br />• Maintained automated CI/CD pipelines using GitHub Actions{' '}
            <br />• Collaborated using Git workflows, pull requests, and code
            reviews in Agile environments
            <br />• Delivered clean, reusable, and scalable code focused on
            maintainability and performance
          </p>
        </div>
        {/* PT Porto */}
        {/* colom 1 */}
        {/* <div className='hidden w-152 flex-col space-y-12 md:block'>
          <Image
            src='/images/30_porto.png'
            alt='porto company'
            width={152}
            height={48}
            className='h-80 w-80 object-contain'
          />
          <p className='font-semibold md:text-xl'>Porto</p>
          <p className='md: text-md'>2024-2025</p>
        </div> */}

        {/* colom 2 */}
        {/* <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div> */}
        {/* colom 3 */}
        {/* <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Junior Plant Manager
          </h3>
          <p className='text-10 content-end text-gray-800 md:text-[16px]'>
            • Controlled & responsibility for budget, safety, environmental
            compliance, and production continuity
            <br /> • Managed projects using Agile/Scrum methodologies to enhance
            production and quality efficiency
            <br /> • Led factory operations, ensuring daily production targets
            were met efficiently
          </p>
        </div> */}
        {/* SAP */}
        {/* colom 1 */}
        {/* <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/31_sap.png'
            alt='SAP company'
            width={152}
            height={48}
            className='h-60 w-60 object-contain'
          />
          <p className='font-semibold md:text-xl'>SAP</p>
          <p className='md: text-md'>2022-2024</p>
        </div> */}

        {/* colom 2 */}
        {/* <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div> */}
        {/* colom 3 */}
        {/* <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Head Production
          </h3>
          <p className='md:tet-[16px] text-10 content-end text-gray-800'>
            • Improvements on the production line using Lean Six Sigma
            methodologies
            <br />• Managed workflows, priorities, and cross-team communication
            <br />• Ensured quality standards and smooth project execution
          </p>
        </div> */}
        {/* Hankook */}
        {/* colom 1 */}
        <div className='hidden w-152 space-y-12 md:block'>
          <Image
            src='/images/32_Hankook_Tire.svg'
            alt='Hankook company'
            width={152}
            height={48}
            className='h-60 w-120 object-contain'
          />
          <p className='font-semibold md:text-xl'>Hankook</p>
          <p className='md: text-md'>2013-2021</p>
        </div>

        {/* colom 2 */}
        <div className='z-1'>
          <div className='flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#A4A7AE] bg-white md:h-40 md:w-40 dark:bg-black'>
            <div className='h-14.4 w-14.4 mx-auto h-24 w-24 rounded-full bg-[#2a9e8b]'></div>
          </div>
        </div>
        {/* colom 3 */}
        <div>
          <h3 className='content-center font-semibold text-black md:text-[20px] dark:text-white'>
            Technology & Manufacturing Staff
          </h3>
          <p className='md:tet-[16px] text-10 content-end text-gray-800'>
            • Reduced production downtime (loss time) by analyzing process
            inefficiencies and implementing improvement
            <br />• Improved product quality by reducing rejection rates through
            process analysis and process optimization
          </p>
        </div>
        {/* garis */}
        {/* <div className='absolute top-[7.299%] left-[21.2837%] z-0 h-450 w-100 border-l border-dashed border-[#A4A7AE]'></div> */}
      </div>
    </section>
  );
}
