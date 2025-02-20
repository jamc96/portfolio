import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
export default function NavigationBarBrand({
  orientation = 'horizontal',
}: {
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <div
      className={cn('flex items-center', {
        'gap-x-4': !orientation || orientation === 'horizontal',
        'flex flex-col': !orientation || orientation === 'vertical',
      })}
    >
      <div
        className={cn('relative  rounded-full', {
          'w-10 h-10': !orientation || orientation === 'horizontal',
          'w-28 h-28': !orientation || orientation === 'vertical',
        })}
      >
        <Image
          alt='Profile Picture'
          fill
          className='w-full h-full rounded-full'
          src='/profile.png'
        />
      </div>
      <Link
        href='/'
        className={cn('flex flex-col group', {
          'items-center mt-2': orientation === 'vertical',
        })}
      >
        <p
          className={cn(' font-black text-gray-200 group-hover:text-blue-500', {
            'text-lg': !orientation || orientation === 'horizontal',
            'text-2xl': !orientation || orientation === 'vertical',
          })}
        >
          Jose Mejia
        </p>
        <span
          className={cn('text-gray-400 font-thin group-hover:text-gray-200', {
            'text-xs': !orientation || orientation === 'horizontal',
            'text-base': !orientation || orientation === 'vertical',
          })}
        >
          Full Stack Developer
        </span>
      </Link>
    </div>
  );
}
