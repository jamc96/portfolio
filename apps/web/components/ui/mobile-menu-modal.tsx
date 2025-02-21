'use client';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import NavigationBarBrand from '../shared/navigation-bar-brand';

export default function MobileMenuModal({
  setOpen,
  children,
}: {
  children: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  useLockBodyScroll();
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className={
        'fixed min-h-screen h-full w-full inset-0 bg-background z-50 flex flex-col'
      }
    >
      <div className='z-50 px-4 mt-4 container flex items-center justify-between'>
        <NavigationBarBrand />

        <button
          className='flex-shrink-0 text-foreground dark:text-foreground border border-foreground py-2 px-4 hover:text-primary'
          onClick={() => setOpen(false)}
        >
          <IconX />
        </button>
      </div>
      {children}
    </motion.div>
  );
}
