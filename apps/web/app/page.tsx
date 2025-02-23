import { WordRotate } from "@/components/magicui/word-rotate";
import { FeaturedProjects } from "@/components/shared/featured-projects";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container relative py-24 desktop:flex desktop:flex-1 desktop:items-center desktop:py-0">
        <div className="flex flex-col items-center text-center desktop:w-3/5 desktop:flex-shrink-0 desktop:items-start desktop:text-start">
          <h3 className="px-2 text-16 font-normal text-neutral tablet:text-20">
            Building Smarter, Faster, Better
          </h3>
          <h1 className="font-heading text-40 font-bold tablet:text-48 desktop:text-64">
            Creating <br className="tablet:hidden" />
            <WordRotate
              className="inline-flex overflow-hidden rounded-sm bg-primary px-2 py-1"
              words={[
                "Impactful",
                "High-Quality",
                "Innovative",
                "Next-Gen",
                "Cutting-Edge",
              ]}
            />
            <br /> Digital Solutions
          </h1>
          <Link href="/" className="group relative mt-8 p-1">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-neutral" />
            <div className="group relative flex items-start gap-x-4 rounded-lg bg-foreground p-1 text-white transition duration-200 hover:bg-transparent">
              <span className="inline-flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-foreground">
                <IconPlayerPlayFilled className="size-16 group-hover:text-primary" />
              </span>
              <div className="inline-flex flex-1 flex-col items-start font-bold">
                <span className="text-24 text-neutral group-hover:text-foreground">
                  Intro
                </span>
                <span className="pr-8 text-24 text-background group-hover:text-foreground">
                  Watch Video
                </span>
              </div>
            </div>
          </Link>
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
