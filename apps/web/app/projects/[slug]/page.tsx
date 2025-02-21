import ComingSoonText from '@/components/elements/coming-soon-text';

export default async function Project({}: {
  params: Promise<{ slug: string }>;
}) {
  return <div className='flex-1 h-full w-full flex flex-col items-center justify-center'><ComingSoonText/></div> 
}
