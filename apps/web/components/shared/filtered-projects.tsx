import { getAllProjects, getProyectTypes } from '@/app/action/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '../elements/accordion';
import AnimateEntrance from '../elements/animate-entrance';
import { buttonVariants } from '../ui/button';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export type SearchParams = { type: string; project?: string };
interface FilteredProjects {
  query: SearchParams;
}

export const FilteredProjects = async ({ query }: FilteredProjects) => {
  const queryType =
    !query.type || query.type === 'all' ? undefined : { type: query.type };
  const projects = await getAllProjects({ query: queryType });
  const types = await getProyectTypes();

  const selectedProject =
    projects.find((p) => p.slug === query.project) || projects[0];

  return (
    <div className='w-full flex flex-col desktop:flex-row desktop:justify-between desktop:items-center gap-x-16'>
      <div className='flex-1 h-[32rem] w-full relative hidden desktop:inline-flex'>
        {selectedProject?.image ? (
          <AnimateEntrance>
            <Image
              src={selectedProject.image}
              alt='project image'
              className='w-full h-full rounded-tr-lg'
              fill
            />
          </AnimateEntrance>
        ) : (
          <div className='w-full bg-neutral inline-flex items-center justify-center rounded-tr-lg'>
            <TextGenerateEffect words='Coming Soon..' />
          </div>
        )}
      </div>
      <div className='flex flex-col w-full gap-y-4 desktop:w-2/5 desktop:flex-shrink-0'>
        <div className='flex items-center justify-between'>
          <Link
            href={{
              pathname: '/projects/',
              query: { type: 'all', project: selectedProject.slug },
            }}
            className={cn(
              'flex-shrink-0 place-self-end cursor-pointer',
              buttonVariants({ variant: 'navigation-link' })
            )}
          >
            {`All (${projects.length})`}
          </Link>
          <div className='space-x-2'>
            {types.map(({ name, slug, color }, index) => (
              <Link
                key={`type-${index}`}
                href={{
                  pathname: '/projects/',
                  query: { type: slug, project: selectedProject.slug },
                }}
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
        <div className='desktop:h-[30rem] overflow-y-auto'>
          <Accordion>
            {projects.map(({ name, slug, description, id }, index) => (
              <AccordionItem key={`accordion-${index}`} index={id}>
                <AccordionHeader index={id}>
                  <Link
                    href={{
                      pathname: '/projects/',
                      query: {
                        type: query?.type || 'all',
                        project: slug,
                      },
                    }}
                  >
                    <span className='pr-8'>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    {name}
                  </Link>
                </AccordionHeader>
                <AccordionContent index={id}>
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
      </div>
    </div>
  );
};
