'use client';
import { cn } from '@/lib/utils';
import { IconStarFilled } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { LinkPreview } from './link-preview';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    label: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
        className
      )}
    >
      {items.map(({ link, title, description, label, tags }, index) => (
        <div
          key={`card-hover-item-${index}`}
          className='relative group block p-2 col-span-1 '
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-blue-500 dark:bg-slate-800/[0.8] block '
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className='w-full group/card z-20 relative'>
            <div className='overflow-hidden relative card h-72 shadow-xl bg-blue-500 flex flex-col justify-between p-4'>
              <div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:opacity-70 opacity-50 bg-black'></div>
              <div className='flex flex-row items-center space-x-2 z-10'>
                <IconStarFilled className='h-10 w-10 rounded-full bg-gray-200 object-cover group-hover/card:bg-blue-500 p-2 text-blue-500 group-hover/card:text-gray-200' />
                <div className='flex flex-col'>
                  <p className='font-normal text-base text-gray-50 relative group-hover/card:font-semibold'>
                    {label}
                  </p>
                  <p className='text-sm text-gray-400 group-hover/card:text-gray-200'>
                    {tags &&
                      tags
                        .slice(0, 3)
                        .map((tag, index) => (
                          <span key={`tag-${index}`}>{`${tag} ${
                            index !== 2 ? '| ' : ''
                          }`}</span>
                        ))}
                  </p>
                </div>
              </div>
              <div className='text content z-20'>
                <LinkPreview
                  url={link}
                  className='font-bold text-xl md:text-2xl text-gray-50 relative group-hover/card:bg-blue-500 line-clamp-2'
                >
                  {title}
                </LinkPreview>
                <p className='font-normal text-sm text-gray-300 relative z-10 my-4 group-hover/card:text-gray-50 line-clamp-4'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
