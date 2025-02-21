import { cn } from '@/lib/utils';
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
      <Link href='/' className='flex flex-col items-start group'>
        <p className='text-24 tablet:text-32 desktop:text-40 font-heading font-extrabold text-foreground group-hover:bg-primary px-4 py-2 rounded-lg'>
          Jose<span className='text-primary group-hover:text-foreground'>Mejia</span>
        </p>
      </Link>
    </div>
  );
}
