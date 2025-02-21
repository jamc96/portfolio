'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Header({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 100];
  const height = useTransform(scrollY, scrollYRange, ['80px', '56px']);

  return (
    <motion.header
      style={{ height }}
      className={'w-full h-full sticky top-0 z-50 bg-black/75 border-black border-b '}
    >
      <div className='h-full flex items-center justify-between mx-auto container'>
        {children}
      </div>
    </motion.header>
  );
}
