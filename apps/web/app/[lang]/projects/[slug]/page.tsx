import { getProjectBySlug } from "@/app/[lang]/action/projects";
import AnimateEntrance from "@/components/elements/animate-entrance";
import { Button, buttonVariants } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IProyectType } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug({ slug });

  return (
    <>
      <section className="p container relative w-full desktop:px-[16rem]">
        {!project ? (
          <span className="text-white">oopps not found</span>
        ) : (
          <div className="flex flex-1 flex-col items-center gap-y-4 tablet:gap-y-12">
            {/* Hero image */}
            <div className="relative -mt-10 h-[22rem] w-full items-center tablet:-mt-20 tablet:h-[30rem]">
              {project.image ? (
                <>
                  <AnimateEntrance>
                    <Image
                      src={project.image}
                      alt="project image"
                      className="h-full w-full rounded-b-md object-cover"
                      fill
                    />
                  </AnimateEntrance>
                </>
              ) : (
                <div className="inline-flex h-full w-full items-center justify-center rounded-b-md bg-neutral">
                  <TextGenerateEffect words="Coming Soon.." />
                </div>
              )}
              <div className="absolute inset-x-0 -bottom-4 inline-flex items-center justify-center">
                <span
                  className={cn(
                    "inline-flex flex-shrink-0 cursor-pointer",
                    {
                      "bg-[#84BE7E]": project.type === "development",
                      "bg-[#9873C6]": project.type === "automation",
                    },
                    buttonVariants({ variant: "navigation-link" }),
                  )}
                >
                  {project.featured && (
                    <IconStarFilled className="size-5 text-background dark:text-foreground" />
                  )}

                  <IProyectType
                    className="size-5 text-background dark:text-foreground"
                    type={project.type}
                  />
                </span>
              </div>
            </div>
            {/* Project description */}
            <div className="flex flex-col gap-y-2 px-4">
              <h1 className="text-center font-heading text-40 font-bold">
                {project.name}
              </h1>
              <p className="text-center text-16">{project.description}</p>
            </div>
            {/* Categories and skills */}
            <div className="flex flex-col gap-y-2 px-4 tablet:flex-row tablet:gap-x-8">
              <div className="flex flex-col items-start gap-y-2">
                <h3 className="text-24 text-foreground">Categories</h3>
                <div className="inline-flex w-full flex-wrap gap-2">
                  {project.categories &&
                    project.categories.map((name, index) => (
                      <Button key={`category-${index}`} size="sm">
                        {name}
                      </Button>
                    ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-y-2">
                <h3 className="text-24 text-foreground">Technical Skills</h3>
                <div className="inline-flex w-full flex-wrap justify-end gap-2">
                  {project.skills &&
                    project.skills.map((name, index) => (
                      <Button
                        key={`category-${index}`}
                        size="sm"
                        variant="secondary"
                      >
                        {name}
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
