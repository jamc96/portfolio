'use client';
import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
  IconMenu2,
} from '@tabler/icons-react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileMenuModal from '../ui/mobile-menu-modal';
import NavigationBarBrand from '../shared/navigation-bar-brand';
import Link from 'next/link';

export default function MobileMenuBar() {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      setOpen(false);
    }
  };
  return (
    <div
      className={
        'flex-none h-10 py-2 px-4 flex flex-row sm:hidden items-center justify-between border border-gray-200'
      }
    >
      <div className='flex justify-end z-20 w-full'>
        <IconMenu2
          className='text-gray-200 hover:text-blue-500 cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <MobileMenuModal setOpen={setOpen}>
            <div className='mt-10 flex flex-col justify-between items-center h-full'>
              <div
                className='flex flex-col gap-y-6 items-center'
                onClick={handleClick}
              >
                <NavigationBarBrand orientation='vertical' />
                <div className='inline-flex flex-col gap-2 items-center text-lg'>
                  <Link
                    className='text-gray-400 hover:text-gray-200'
                    href='/about'
                  >
                    About
                  </Link>
                  <Link
                    className='text-gray-400 hover:text-gray-200'
                    href='/projects'
                  >
                    Projects
                  </Link>
                </div>
              </div>
              <div className='flex gap-x-2 items-center justify-center'>
                <Link target='_blank' href='https://x.com/jamcmejia1'>
                  <IconBrandX className='text-gray-200 hover:text-blue-500' />
                </Link>
                <Link
                  target='_blank'
                  href='https://www.linkedin.com/in/jose-alfredo-mejia'
                >
                  <IconBrandLinkedin className='text-gray-200 hover:text-blue-500' />
                </Link>
                <Link href='mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website'>
                  <IconBrandGmail className='text-gray-200 hover:text-blue-500' />
                </Link>
                <Link target='_blank' href='/cv_josemejia.pdf'>
                  <IconFileCv className='text-gray-200 hover:text-blue-500' />
                </Link>
              </div>
            </div>
          </MobileMenuModal>
        )}
      </AnimatePresence>
    </div>
  );
}
