'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Header({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 100];
  const height = useTransform(scrollY, scrollYRange, ['80px', '56px']);

  return (
    <motion.header
      style={{ height }}
      className={'w-full sticky top-0 z-50 bg-black'}
    >
      <div className='h-full max-w-5xl flex items-center justify-between mx-auto px-8'>
        {children}
      </div>
    </motion.header>
  );
}
