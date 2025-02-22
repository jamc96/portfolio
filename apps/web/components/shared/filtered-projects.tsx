import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '../elements/accordion';
import { cn } from '@/lib/utils';
import { getAllProjects, getProyectTypes } from '@/app/action/projects';

interface FilteredProjects {
  query: { type: string };
}
export const FilteredProjects = async ({ query }: FilteredProjects) => {
  const filter =
    !Object.keys(query).length || query.type === 'all' ? undefined : query;
  const projects = await getAllProjects({ query: filter });
  const types = await getProyectTypes();
  return (
    <div className='flex flex-col w-full gap-y-4 desktop:w-1/2'>
      <div className='flex items-center justify-between'>
        <Link
          href={`/projects/?type=all`}
          className={cn(
            'flex-shrink-0 place-self-end cursor-pointer',
            buttonVariants({ variant: 'navigation-link' })
          )}
        >
          All
        </Link>
        <div className='space-x-2'>
          {types.map(({ name, slug, color }, index) => (
            <Link
              key={`type-${index}`}
              href={`/projects/?type=${slug}`}
              className={cn(
                'flex-shrink-0 place-self-end cursor-pointer',
                {
                  'bg-[#84BE7E]': color === 'green',
                  'bg-[#9873C6]': color === 'purple',
                },
                buttonVariants({ variant: 'navigation-link' })
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <Accordion>
        {projects.map(({ name, slug, description }, index) => (
          <AccordionItem key={`accordion-${index}`} index={index}>
            <AccordionHeader index={index}>
              <span className='pr-8'>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              {name}
            </AccordionHeader>
            <AccordionContent index={index}>
              <div className='flex flex-col justify-end'>
                <span className='text-16 font-normal'>{description}</span>
                <Link
                  href={`/projects/${slug}`}
                  className={cn(
                    'flex-shrink-0 place-self-end cursor-pointer',
                    buttonVariants({ variant: 'navigation-link' })
                  )}
                >
                  see more
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
