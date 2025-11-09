'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
import { navigationData } from '../data/navigation-data';
import Link from 'next/link';
import ToggleDark from '../ui/toggledark';
import ToggleHamburger from '../ui/togglehamburger';

export default function Navbar() {
  return (
    <nav className='bg-primary-dark w-full text-white dark:bg-black'>
      <div className='custom-container flex-between h-80 lg:h-85'>
        <div className='flex w-141 gap-8 text-lg font-semibold whitespace-nowrap hover:cursor-pointer hover:text-blue-800'>
          {/* 1.Image */}
          <Image
            src='/icons/01_logo.png'
            alt='logo'
            width={26.3}
            height={28.5}
            className='w-26.3 h-28.5 object-contain'
          />
          Your Logo
        </div>

        {/* 2. Nav */}
        <ul className='text-md font-regular spacing-4xl ml-99 hidden w-544 items-center justify-between gap-32 p-8 lg:flex'>
          {navigationData.map((item) => (
            <li key={item.label} className='hover:text-blue-800'>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* 3.Toggle Darkmode */}
        <ToggleDark />

        {/* 4.Button */}
        <Button className='hidden h-48 w-172 gap-8 rounded-full bg-white text-sm font-medium text-black hover:cursor-pointer lg:flex'>
          <Mail className='size-20' />
          Hire Me
        </Button>

        {/* 5.Hamburger */}
        <ToggleHamburger />
      </div>
    </nav>
  );
}
