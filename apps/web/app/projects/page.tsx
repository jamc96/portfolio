import {
  FilteredProjects,
  SearchParams,
} from "@/components/shared/filtered-projects";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = await searchParams;

  return (
    <>
      <section className="container relative w-full desktop:pl-0">
        <div className="flex flex-col items-center gap-y-8 pt-24 desktop:gap-0">
          <h1 className="font-heading text-40 font-bold tablet:text-48 desktop:w-2/5 desktop:self-end">
            Projects
          </h1>
          <FilteredProjects query={query} />
        </div>
      </section>
    </>
  );
}
