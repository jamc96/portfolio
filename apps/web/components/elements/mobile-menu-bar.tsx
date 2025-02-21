'use client';
import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconComponents,
  IconFileCv,
  IconMenu2,
  IconUser,
} from '@tabler/icons-react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileMenuModal from '../ui/mobile-menu-modal';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

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
        'flex-none h-10 py-2 px-4 flex flex-row tablet:hidden items-center justify-between border border-gray-200 '
      }
    >
      <div className='flex justify-end z-50 w-full'>
        <IconMenu2
          className='text-gray-200 hover:text-primary cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <MobileMenuModal setOpen={setOpen}>
            <div
              className='w-full flex flex-col gap-y-12'
              onClick={handleClick}
            >
              <div className='mt-12 flex flex-col gap-y-6 text-16 px-6 font-semibold'>
                <Link
                  className='px-6 py-2 inline-flex items-center justify-between text-foreground cursor-pointer bg-secondary rounded-md'
                  href='/projects'
                >
                  Projects
                  <IconComponents />
                </Link>
                <Link
                  className='px-6 py-2 inline-flex items-center justify-between text-foreground cursor-pointer bg-secondary rounded-md'
                  href='/about'
                >
                  About
                  <IconUser />
                </Link>
              </div>
              <div className='w-full flex flex-col gap-y-8'>
                <Link
                  href='mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website'
                  className={cn(
                    'mx-6',
                    buttonVariants({
                      size: 'lg',
                    })
                  )}
                >
                  Get in touch
                </Link>
                <div className='flex gap-x-2 items-center justify-center'>
                  <Link target='_blank' href='https://x.com/jamcmejia1'>
                    <IconBrandX className='text-gray-200 hover:text-primary' />
                  </Link>
                  <Link
                    target='_blank'
                    href='https://www.linkedin.com/in/jose-alfredo-mejia'
                  >
                    <IconBrandLinkedin className='text-gray-200 hover:text-primary' />
                  </Link>
                  <Link href='mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website'>
                    <IconBrandGmail className='text-gray-200 hover:text-primary' />
                  </Link>
                  <Link target='_blank' href='/cv_josemejia.pdf'>
                    <IconFileCv className='text-gray-200 hover:text-primary' />
                  </Link>
                </div>
              </div>
            </div>
          </MobileMenuModal>
        )}
      </AnimatePresence>
    </div>
  );
}
