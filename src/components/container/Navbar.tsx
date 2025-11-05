import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
import { navigationData } from '../data/navigation-data';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-primary-dark w-full text-white'>
      <div className='custom-container flex-between h-85'>
        <div className='flex gap-8 text-lg font-semibold hover:cursor-pointer hover:text-blue-800'>
          {/* 1.Image */}
          <Image
            src='/icons/logo.png'
            alt='logo'
            width={26.3}
            height={28.5}
            className='object-contain'
          />
          Your Logo
        </div>

        {/* 2. Nav */}
        <ul className='text-md font-regular hidden items-center justify-between gap-32 p-8 md:flex'>
          {navigationData.map((item) => (
            <li key={item.label} className='hover:text-blue-800'>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* 3.Button */}
        <Button className='hidden h-48 w-172 gap-8 rounded-full bg-white text-sm font-medium text-black hover:cursor-pointer md:flex'>
          <Mail className='size-20' />
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
