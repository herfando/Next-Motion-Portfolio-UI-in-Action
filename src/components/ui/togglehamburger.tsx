'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigationData } from '../data/navigation-data';

export default function ToggleHamburger() {
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
          className='rounded-md p-2 md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X size={28} className='text-white' />
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
        <div className='fixed top-80 left-0 h-[calc(100vh-64)] w-full flex-col border-t bg-white text-black shadow-md md:hidden dark:bg-black dark:text-white'>
          <ul className='flex flex-col gap-16 p-16'>
            {navigationData.map((item) => (
              <li key={item.label} className='hover:text-blue-800'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
