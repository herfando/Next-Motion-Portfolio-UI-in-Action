'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, X } from 'lucide-react';
import { navigationData } from '../data/navigation-data';
import Image from 'next/image';
import { Button } from './button';

export default function ToggleHamburger({}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative block md:hidden'>
      {/* Navbar atas */}
      <nav className='flex items-center justify-between p-4'>
        {/* Menu desktop */}
        <div className='hidden gap-4 md:flex'>
          <a href='#home' className='hover:text-primary transition-colors'>
            Home
          </a>
          <a href='#about' className='hover:text-primary transition-colors'>
            About
          </a>
          <a href='#contact' className='hover:text-primary transition-colors'>
            Contact
          </a>
        </div>

        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-20 rounded-md p-2 md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X size={28} className='text-black dark:text-white' />
          ) : (
            // Garis 3 manual
            <div className='grid h-24 w-24 justify-items-end gap-6 p-3'>
              <span className='h-2 w-18 bg-white'></span>
              <span className='h-2 w-18 bg-white'></span>
              <span className='h-2 w-12 bg-white'></span>
            </div>
          )}
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      {isOpen && (
        <nav className='fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white'>
          <div className='custom-container flex-between h-80 md:h-85'>
            <div className='flex gap-8 text-lg font-semibold hover:cursor-pointer hover:text-blue-800'>
              <Image
                src='/icons/logo_black.png'
                alt='logo'
                width={26.3}
                height={28.5}
                className='object-contain'
              />
              Your Logo
            </div>
            <div className='fixed top-80 left-0 h-[calc(100vh-64)] w-full flex-col bg-white text-black md:hidden dark:bg-black dark:text-white'>
              <ul className='text-md font-regular flex flex-col gap-16 p-16'>
                {navigationData.map((item) => (
                  <li key={item.label} className='hover:text-blue-800'>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <Button className='h-48 w-full gap-8 rounded-full bg-[#6600EB]'>
                  <Mail className='size-20' />
                  Hire Me
                </Button>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
