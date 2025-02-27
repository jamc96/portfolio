import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { WordRotate } from "@/components/magicui/word-rotate";
import { FeaturedProjects } from "@/components/shared/featured-projects";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <section className="container relative py-24 desktop:flex desktop:flex-1 desktop:items-center desktop:py-0">
        <div className="flex flex-col items-center text-center desktop:w-3/5 desktop:flex-shrink-0 desktop:items-start desktop:text-start">
          <h3 className="px-2 text-16 font-bold text-neutral tablet:text-20">
            Building Smarter, Faster, Better
          </h3>
          <h1 className="font-heading text-40 font-bold tablet:text-48 desktop:text-64">
            Creating <br className="tablet:hidden" />
            <WordRotate
              className="inline-flex overflow-hidden rounded-sm bg-primary px-2 py-1 text-background dark:text-foreground"
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

          <HeroVideoDialog
            className="group relative mt-8 p-1"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/sxGpp9q8T9Q?si=bPHvKCKwXG1eXKVY"
          >
            <BackgroundGradient className="group relative flex items-start gap-x-4 rounded-lg bg-background p-1 text-foreground transition duration-200 hover:bg-transparent dark:bg-foreground dark:hover:bg-transparent">
              <span className="inline-flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-background dark:group-hover:bg-foreground">
                <IconPlayerPlayFilled className="size-16 text-background group-hover:text-primary dark:text-foreground" />
              </span>
              <div className="inline-flex flex-1 flex-col items-start font-bold">
                <span className="text-24 text-neutral group-hover:text-background dark:group-hover:text-foreground">
                  Intro
                </span>
                <span className="pr-8 text-24 text-foreground group-hover:text-background dark:text-background dark:group-hover:text-foreground">
                  Watch Video
                </span>
              </div>
            </BackgroundGradient>
          </HeroVideoDialog>
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
