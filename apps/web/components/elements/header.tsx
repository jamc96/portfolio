'use client';
import { motion } from 'framer-motion';
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={
        'w-full sticky top-0 z-40 inset-x-0 flex items-center justify-between container pt-4 tablet:pt-10 bg-background/75 backdrop-blur-lg border-b border-background'
      }
    >
      {children}
    </motion.header>
  );
}
