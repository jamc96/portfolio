import {
  FilteredProjects,
  SearchParams,
} from '@/components/shared/filtered-projects';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = await searchParams;

  return (
    <>
      <section className='relative w-full container desktop:pl-0'>
        <div className='flex flex-col gap-y-8 items-center pt-24 desktop:gap-0'>
          <h1 className='font-heading text-40 tablet:text-48 font-bold desktop:w-2/5 desktop:self-end'>
            Projects
          </h1>

          <FilteredProjects query={query} />
        </div>
      </section>
    </>
  );
}
