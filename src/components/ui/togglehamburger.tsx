'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function ToggleHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Bagian atas Navbar */}
      <nav className='flex items-center justify-between border-b p-4'>
        <div className='text-lg font-bold'>MySite</div>

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

        {/* Tombol hamburger mobile */}
        <button
          onClick={handleToggleMenu}
          className='hover:bg-accent rounded-md p-2 md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile muncul saat isOpen */}
      {isOpen && (
        <div className='bg-background absolute top-full left-0 flex w-full flex-col border-t shadow-md md:hidden'>
          <a
            href='#home'
            className='hover:bg-accent border-b px-4 py-2 transition-colors'
          >
            Home
          </a>
          <a
            href='#about'
            className='hover:bg-accent border-b px-4 py-2 transition-colors'
          >
            About
          </a>
          <a
            href='#contact'
            className='hover:bg-accent px-4 py-2 transition-colors'
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
