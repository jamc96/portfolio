'use client';
import { projects } from '@/lib/constants';
import { IconStarFilled } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex flex-col w-full'>
      <h3 className='inline-flex items-center gap-8 p-4 self-center text-20 desktop:self-start'>
        <IconStarFilled className='text-foreground size-5' /> Featured Projects
      </h3>
      {projects.map(({ name, slug, description }, index) => {
        const isOpen = selectedIndex === index;
        return (
          <div
            key={index}
            className={`p-6 rounded-sm font-bold text-20 cursor-pointer ${
              isOpen ? 'bg-secondary' : ''
            }`}
            onClick={() => toggleIndex(index)}
          >
            <span className='pr-8'>
              {(index + 1).toString().padStart(2, '0')}
            </span>
            {name}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: 300, opacity: 1 }}
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='overflow-hidden mt-2'
                >
                  <div className='flex flex-col justify-end'>
                    <span className='text-16 font-normal'>{description}</span>
                    <Link
                      href={`/projects/${slug}`}
                      className={cn(
                        'flex-shrink-0 place-self-end cursor-pointer',
                        buttonVariants({ variant: 'navigation-link' })
                      )}
                    >
                      see more
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
