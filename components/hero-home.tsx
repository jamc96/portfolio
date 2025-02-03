'use client';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { FlipWords } from './ui/flip-words';
import Link from 'next/link';

export default function HeroHome() {
  const words = ['impactful', 'scalable', 'innovative', 'modern', 'better'];
  return (
    <LampContainer>
      <div className='my-16 text-center text-5xl sm:text-7xl font-semibold text-neutral-200'>
        Building
        <FlipWords duration={2000} words={words} /> <br />
        products from your ideas
      </div>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-base'
      >
        <Link
          href='#'
          className='px-24 py-3 lg:px-16 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-transparent border border-blue-500 hover:border-blue-500 bg-[#0070f3] text-white font-medium hover:font-semibold transition duration-200 ease-linear'
        >
          Hire Me
        </Link>
        <Link
          href='#' className='px-24 py-3 lg:px-16 text-neutral-200 text-base hover:bg-transparent border hover:border-blue-500 hover:text-blue-500 font-medium hover:font-semibold hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]'>
          Previews Work
        </Link>
      </motion.div>
    </LampContainer>
  );
}
