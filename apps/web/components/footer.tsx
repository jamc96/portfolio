import { IconCode } from '@tabler/icons-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='h-12 w-full  flex items-center justify-center text-foreground space-x-2 bg-black tablet:bg-transparent'>
      <p>©</p>
      <span className='font-bold'>2025</span>
      <Link
        target='_blank'
        href='https://github.com/jamc96/portfolio'
        className='inline-flex gap-x-2 items-center group '
      >
        {'|'}

        <span className='text-foreground'>Built with 💜</span>
        <div className='inline-flex justify-center items-center gap-x-2'>
          <IconCode className='size-4' />
          <span className='hidden desktop:inline-block group-hover:underline'>
            View on Github
          </span>
        </div>
      </Link>
    </footer>
  );
}
