import AnimateEntrance from "@/components/elements/animate-entrance";
import { CustomImage } from "@/components/shared/custom-image";
import { Button, buttonVariants } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { fetchAPI } from "@/lib/api";
import { IProyectType } from "@/lib/helpers";
import { Project as TProject } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await fetchAPI<TProject[]>({
    path: "/api/projects",
    query: {
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height"],
        },
        skills: {
          fields: ["name"],
        },
        categories: {
          fields: ["name"],
        },
      },
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
  });
  const project = projects.length > 0 ? projects[0] : null;
  return (
    <>
      <section className="p container relative w-full desktop:px-[16rem]">
        {!project ? (
          <span className="text-white">oopps not found</span>
        ) : (
          <div className="flex flex-1 flex-col items-center gap-y-4 tablet:gap-y-12">
            {/* Hero image */}
            <div className="relative -mt-10 h-[22rem] w-full items-center tablet:-mt-20 tablet:h-[30rem]">
              {project.cover ? (
                <>
                  <AnimateEntrance>
                    <CustomImage
                      {...project.cover}
                      className="h-full w-full rounded-b-md object-cover"
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
              <span className="text-center text-16">
                {project.link && (
                  <LinkPreview className="font-bold" url={project.link.url}>
                    {project.link?.label}{" "}
                  </LinkPreview>
                )}{" "}
                {project.description}
              </span>
            </div>
            {/* Categories and skills */}
            <div className="flex flex-col gap-y-2 px-4 tablet:flex-row tablet:gap-x-8">
              {project.categories.length > 0 && (
                <div className="flex flex-col items-start gap-y-2">
                  <h3 className="text-24 text-foreground">Categories</h3>
                  <div className="inline-flex w-full flex-wrap gap-2">
                    {project.categories.map(({ name }, index) => (
                      <Button key={`category-${index}`} size="small">
                        {name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {project.skills.length > 0 && (
                <div className="flex flex-col items-end gap-y-2">
                  <h3 className="text-24 text-foreground">Technical Skills</h3>
                  <div className="inline-flex w-full flex-wrap justify-end gap-2">
                    {project.skills &&
                      project.skills.map(({ name }, index) => (
                        <Button
                          key={`category-${index}`}
                          size="small"
                          variant="secondary"
                        >
                          {name}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
