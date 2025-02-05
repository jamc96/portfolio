import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <header className='h-16 w-full bg-black '>
      <div className='h-full max-w-4xl flex items-center justify-between mx-auto px-4'>
        <div className='flex sm:gap-x-10 gap-x-2 items-center'>
          <Link href='/' className='flex gap-x-4 items-center'>
            <div className='relative w-6 h-6 '>
              <Image
                alt='Profile Picture'
                fill
                className='w-full h-full'
                src='/profile.png'
              />
            </div>
            <span className='text-lg sm:text-2xl font-black text-gray-200'>
              Jose Mejia
            </span>
          </Link>
          <div className='flex text-gray-400 hover:text-gray-200'>
            <Link href='/projects'>Projects</Link>
          </div>
        </div>
        <Link
          href='https://www.linkedin.com/in/jose-alfredo-mejia/'
          className='text-center px-8 py-1 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-transparent border border-blue-500 hover:border-blue-500 bg-[#0070f3] text-white font-medium hover:font-semibold transition duration-200 ease-linear'
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
