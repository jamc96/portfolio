import { WordRotate } from '@/components/magicui/word-rotate';
import { Accordion } from '@/components/shared/accordion';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='relative container py-10 desktop:flex desktop:flex-1 desktop:items-center'>
        <div className='flex flex-col items-center text-center desktop:w-3/5 desktop:flex-shrink-0 desktop:items-start desktop:text-start'>
          <h3 className='text-20 font-normal text-neutral px-2'>
            Building Smarter, Faster, Better
          </h3>
          <h1 className='font-heading text-48 tablet:text-64 font-bold'>
            Creating{' '}
            <br className='tablet:hidden'/>
            <WordRotate
              className='bg-primary inline-flex px-2 py-1 rounded-sm overflow-hidden'
              words={[
                'Impactful',
                'High-Quality',
                'Innovative',
                'Next-Gen',
                'Cutting-Edge',
              ]}
            /><br/> {' '}
            Digital Solutions
          </h1>
          <Link href='/' className='mt-8 p-1 relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary to-neutral rounded-lg' />
            <div className='p-1 flex bg-foreground items-start rounded-lg gap-x-4 relative group transition duration-200 text-white hover:bg-transparent'>
              <span className='size-20 bg-primary group-hover:bg-foreground rounded-full flex-shrink-0 inline-flex items-center justify-center'>
                <IconPlayerPlayFilled className='size-16 group-hover:text-primary' />
              </span>
              <div className='flex-1 inline-flex flex-col font-bold items-start'>
                <span className='text-neutral text-24 group-hover:text-foreground'>
                  Intro
                </span>
                <span className='text-background text-24 pr-8 group-hover:text-foreground'>
                  Watch Video
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className='hidden desktop:block'>
          <Accordion />
        </div>
      </section>
      <section className='relative container desktop:hidden'>
        <Accordion />
      </section>
    </>
  );
}
