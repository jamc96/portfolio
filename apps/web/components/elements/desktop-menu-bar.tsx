import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
} from '@tabler/icons-react';
import Link from 'next/link';
export default function DesktopMenuBar() {
  return (
    <div className='hidden sm:flex sm:gap-x-6 gap-x-2 items-center'>
      <Link className='text-gray-400 hover:text-gray-200' href='/about'>
        About
      </Link>
      <Link className='text-gray-400 hover:text-gray-200' href='/projects'>
        Projects
      </Link>
      <div className='flex gap-x-2'>
        <Link target='_blank' href='https://x.com/jamcmejia1'>
          <IconBrandX className='text-gray-200 hover:text-primary' />
        </Link>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/jose-alfredo-mejia'
        >
          <IconBrandLinkedin className='text-gray-200 hover:text-primary' />
        </Link>
        <Link href='mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website'>
          <IconBrandGmail className='text-gray-200 hover:text-primary' />
        </Link>
        <Link target='_blank' href='/cv_josemejia.pdf'>
          <IconFileCv className='text-gray-200 hover:text-primary' />
        </Link>
      </div>
    </div>
  );
}
