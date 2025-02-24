import { WordRotate } from "@/components/magicui/word-rotate";
import { CustomLink } from "@/components/shared/custom-link/server";
import { FeaturedProjects } from "@/components/shared/featured-projects";
import { getTranslatedData } from "@/lib/api";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export default async function Home() {
  const { home } = await getTranslatedData();
  const { hero } = home;

  return (
    <>
      <section className="container relative py-24 desktop:flex desktop:flex-1 desktop:items-center desktop:py-0">
        <div className="flex flex-col items-center text-center desktop:w-3/5 desktop:flex-shrink-0 desktop:items-start desktop:text-start">
          <h3 className="px-2 text-16 font-bold text-neutral tablet:text-20">
            {hero.label}
          </h3>
          <h1 className="font-heading text-40 font-bold tablet:text-48 desktop:text-64">
            {hero.titles.title1} <br className="tablet:hidden" />
            <WordRotate
              className="inline-flex overflow-hidden rounded-sm bg-primary px-2 py-1 text-background dark:text-foreground"
              words={hero.titles.words}
            />
            <br /> {hero.titles.title2}
          </h1>
          <CustomLink href="/" className="group relative mt-8 p-1">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-neutral" />
            <div className="group relative flex items-start gap-x-4 rounded-lg bg-background p-1 text-foreground transition duration-200 hover:bg-transparent dark:bg-foreground dark:hover:bg-transparent">
              <span className="inline-flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-background dark:group-hover:bg-foreground">
                <IconPlayerPlayFilled className="size-16 text-background group-hover:text-primary dark:text-foreground" />
              </span>
              <div className="inline-flex flex-1 flex-col items-start font-bold">
                <span className="text-24 text-neutral group-hover:text-background dark:group-hover:text-foreground">
                  {hero.video.label}
                </span>
                <span className="pr-8 text-24 text-foreground group-hover:text-background dark:text-background dark:group-hover:text-foreground">
                  {hero.video.description}
                </span>
              </div>
            </div>
          </CustomLink>
        </div>
        <div className="hidden desktop:block">
          <FeaturedProjects />
        </div>
      </section>
      <section className="container relative desktop:hidden">
        <FeaturedProjects />
      </section>
    </>
  );
}
