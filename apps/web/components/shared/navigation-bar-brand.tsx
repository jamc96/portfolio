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
      <Link href='/' className='flex flex-col items-start'>
        <p className='text-40 font-heading font-extrabold text-foreground'>
          Jose<span className='text-primary'>Mejia</span>
        </p>
      </Link>
    </div>
  );
}
