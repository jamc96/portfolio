import { IconStarFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '../elements/accordion';
import { cn } from '@/lib/utils';
import { getFeaturedProjects } from '@/app/action/projects';

export const FeaturedProjects = async () => {
  const projects = await getFeaturedProjects();
  return (
    <div className='flex flex-col w-full'>
      <h3 className='inline-flex items-center gap-8 p-4 self-center text-20 desktop:self-start'>
        <IconStarFilled className='text-foreground size-5' /> Featured Projects
      </h3>
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
