import Link from 'next/link';
import { HoverEffect } from '../ui/card-hover-effect';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Website Redisign',
      description:
        'Led a complete redesign of the platform, focusing on localization, performance improvements, and SEO enhancements. Delivered interactive pages like weddings and resorts to create a seamless user experience.',
      link: 'https://www.beaches.com/',
      label: 'beaches.com',
      image: '/beaches.png',
      tags: ['Next.js', 'React', 'Tailwindcss'],
    },
    {
      title: 'Nonprofit Website',
      description:
        'Transformed the nonprofit’s website into a fully manageable CMS, boosting content management efficiency by 80%, enabling the team to spend more time on mission-critical tasks.',
      link: 'https://sandalsfoundation.org/',
      image: '/sandals-foundation.png',
      label: 'sandalsfoundation.org',
      tags: ['CMS', 'UI/UX', 'Optimization'],
    },
    {
      title: 'Blogs Enhancement',
      description:
        'Redesigned the blog with modern UI/UX, integrated multilingual support, and reorganized content to boost user engagement and enhance the reading experience.',
      link: 'https://www.beaches.co.uk/blog/',
      image: '/blog.png',
      label: 'beaches.co.uk',
      tags: ['Strapi', 'React', 'SEO'],
    },
  ];
  const words = [
    {
      text: 'Fast',
    },
    {
      text: '+',
      className: 'text-xs sm:text-3xl text-center',
    },
    {
      text: 'Flexible',
    },
    {
      text: '=',
      className: 'text-xs sm:text-3xl text-center',
    },
    {
      text: 'Digital Experiences.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div className='bg-black  w-full min-h-screen flex flex-col items-center justify-center py-16 px-8'>
      <div className='max-w-sm md:max-w-2xl lg:max-w-5xl flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-gray-900 dark:text-neutral-200 text-sm sm:text-sm bg-gray-200 px-4 uppercase tracking-tighter'>
            Featured Projects
          </p>
          <TypewriterEffectSmooth className='hidden sm:flex' words={words} />
        </div>
        <HoverEffect items={projects} />
        <Link
          href='/projects'
          className='flex-shrink-0 text-center px-24 py-3 lg:px-16 text-neutral-200 text-base hover:bg-transparent border hover:border-blue-500 hover:text-blue-500 font-medium hover:font-semibold hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]'
        >
          See More
        </Link>
      </div>
    </div>
  );
}
