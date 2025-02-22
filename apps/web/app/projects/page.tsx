import { FeaturedProjects } from '@/components/shared/featured-projects';

export default function Projects() {
  return (
    <>
      <section className='relative container py-24'>
        <div className='flex flex-col gap-y-8 items-center '>
          <h1 className='font-heading text-40 tablet:text-48 desktop:text-64 font-bold'>
            Projects
          </h1>
          <FeaturedProjects />
        </div>
      </section>
    </>
  );
}
