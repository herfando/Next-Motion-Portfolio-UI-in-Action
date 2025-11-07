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
      <nav className='flex items-center justify-between'>
        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-20 rounded-md md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X
              size={28}
              className='text-black hover:cursor-pointer dark:text-white'
            />
          ) : (
            // Garis 3 manual
            <div className='grid h-24 w-24 -translate-x-4 justify-items-end gap-6 p-3 hover:cursor-pointer'>
              <span className='h-2 w-24 bg-white'></span>
              <span className='h-2 w-24 bg-white'></span>
              <span className='h-2 w-16 bg-white'></span>
            </div>
          )}
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-white text-black transition-transform duration-1000 ease-in-out md:hidden dark:bg-black dark:text-white ${
          isOpen
            ? 'translate-y-0' // /* TRANSLATE HERE: menu muncul */
            : '-translate-y-full' // /* TRANSLATE HERE: menu geser keluar */
        }`}
      >
        <div className='custom-container flex-between h-80 md:h-85'>
          <div className='flex gap-8 text-lg font-semibold hover:cursor-pointer hover:text-blue-800'>
            {/* Logo */}
            <Image
              src='/icons/logo_black.png'
              alt='logo'
              width={26.3}
              height={28.5}
              className='block object-contain dark:hidden'
            />
            <Image
              src='/icons/logo.png'
              alt='logo'
              width={26.3}
              height={28.5}
              className='hidden object-contain dark:block'
            />
            Your Logo
          </div>
          <div className='fixed top-96 right-0 h-[calc(100vh-64)] w-full flex-col bg-white text-black md:hidden dark:bg-black dark:text-white'>
            <ul className='text-md font-regular flex flex-col gap-16 p-16'>
              {navigationData.map((item) => (
                <li key={item.label} className='hover:text-blue-46 h-46'>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <Button className='h-48 w-full gap-8 rounded-full bg-[#6600EB] text-white hover:cursor-pointer dark:text-black'>
                <Mail className='size-20' />
                Hire Me
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
