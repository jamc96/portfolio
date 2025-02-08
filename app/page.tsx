import FeaturedProjects from '@/components/sections/featured-projects';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
