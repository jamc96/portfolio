import { FilteredProjects } from '@/components/shared/filtered-projects';

type SearchParams = Promise<{ type: string }>;
export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;

  return (
    <>
      <section className='relative container py-24'>
        <div className='flex flex-col gap-y-8 items-center '>
          <h1 className='font-heading text-40 tablet:text-48 desktop:text-64 font-bold'>
            Projects
          </h1>

          <FilteredProjects query={query} />
        </div>
      </section>
    </>
  );
}
