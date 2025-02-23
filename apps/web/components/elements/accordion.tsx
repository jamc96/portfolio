'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, ReactNode, useContext, useState } from 'react';

type AccordionContextType = {
  openIndex: number | null;
  toggleIndex: (index: number) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

type AccordionProps = {
  children: ReactNode;
};

type AccordionItemProps = {
  index: number;
  children: ReactNode;
  className?: string;
};

type AccordionHeaderProps = {
  index: number;
  children: ReactNode;
};

type AccordionContentProps = {
  index: number;
  children: ReactNode;
};

export const Accordion = ({ children }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleIndex }}>
      <div className='flex flex-col w-full'>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({
  index,
  children,
  className,
}: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionItem must be used within an Accordion');
  const { openIndex } = context;
  const isOpen = openIndex === index;

  return (
    <div
      className={cn(
        'p-6 rounded-md overflow-hidden transition-colors duration-500 ease-in-out',
        className,
        isOpen ? 'bg-secondary' : 'bg-transparent'
      )}
    >
      {children}
    </div>
  );
};

export const AccordionHeader = ({ index, children }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionHeader must be used within an Accordion');
  const { openIndex, toggleIndex } = context;
  const isOpen = openIndex === index;

  return (
    <div
      className={cn(
        'font-bold text-20 cursor-pointer transition duration-300',
        isOpen ? 'bg-secondary delay-200' : 'bg-transparent'
      )}
      onClick={() => toggleIndex(index)}
    >
      {children}
    </div>
  );
};

export const AccordionContent = ({
  index,
  children,
}: AccordionContentProps) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionContent must be used within an Accordion');
  const { openIndex } = context;
  const isOpen = openIndex === index;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 300 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='pt-2 '
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
