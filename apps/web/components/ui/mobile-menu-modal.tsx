'use client';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';

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
        'fixed h-full w-full inset-0 bg-black p-4 z-[100] flex flex-col'
      }
    >
      <button
        className='absolute right-4 top-5 z-50 text-neutral-200 dark:text-neutral-200 border border-gray-200 py-2 px-4 hover:text-blue-500'
        onClick={() => setOpen(false)}
      >
        <IconX />
      </button>
      {children}
    </motion.div>
  );
}
