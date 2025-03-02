import { cn, getProyectTypes } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "../elements/accordion";
import AnimateEntrance from "../elements/animate-entrance";
import { buttonVariants } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { LinkPreview } from "../ui/link-preview";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { IProyectType } from "@/lib/helpers";
import { IconStarFilled } from "@tabler/icons-react";
import { CustomImage } from "./custom-image";
import { fetchAPI } from "@/lib/api";
import { Project } from "@/lib/types";

export type SearchParams = { type: string; project?: string };
interface FilteredProjects {
  query: SearchParams;
}

export const FilteredProjects = async ({ query }: FilteredProjects) => {
  const queryType =
    !query.type || query.type === "all" ? { $null: "" } : { $eq: query.type };
  const projects = await fetchAPI<Project[]>({
    path: "/api/projects",
    query: {
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height"],
        },
        link: {
          fields: ["label", "url"],
        },
      },
      filters: {
        type: {
          ...queryType,
        },
      },
    },
  });

  const selectedProject =
    projects.find((p) => p.slug === query.project) || projects[0];

  const types = getProyectTypes();

  return (
    <div className="flex w-full flex-col gap-x-16 desktop:flex-row desktop:items-center desktop:justify-between">
      <div className="relative -mx-[2rem] hidden h-[32rem] w-full flex-1 desktop:inline-flex">
        {selectedProject?.cover ? (
          <AnimateEntrance>
            <CustomImage
              {...selectedProject.cover}
              className="h-full w-full rounded-tr-lg"
            />
          </AnimateEntrance>
        ) : (
          <div className="inline-flex w-full items-center justify-center rounded-tr-lg bg-neutral">
            <TextGenerateEffect words="Coming Soon.." />
          </div>
        )}
      </div>
      <div className="flex w-full flex-col gap-y-4 desktop:w-2/5 desktop:flex-shrink-0">
        <div className="flex items-center justify-between">
          <Link
            href={{
              pathname: "/projects/",
              query: { type: "all", project: selectedProject?.slug },
            }}
            className={cn(
              "flex-shrink-0 cursor-pointer place-self-end",
              buttonVariants({ variant: "navigation-link" }),
            )}
          >
            {`All (${projects.length})`}
          </Link>
          <div className="space-x-2">
            {types.map(({ name, slug, color }, index) => (
              <Link
                key={`type-${index}`}
                href={{
                  pathname: "/projects/",
                  query: { type: slug, project: selectedProject?.slug },
                }}
                className={cn(
                  "flex-shrink-0 cursor-pointer place-self-end",
                  {
                    "bg-[#84BE7E]": color === "green",
                    "bg-[#9873C6]": color === "purple",
                  },
                  buttonVariants({ variant: "navigation-link" }),
                )}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="overflow-y-auto desktop:h-[28rem]">
          <Accordion>
            {projects.map(
              ({ name, slug, description, link, type, featured }, index) => (
                <AccordionItem key={`accordion-${index}`} index={index}>
                  <AccordionHeader index={index}>
                    <div className="sm:gap-x-4 flex w-full justify-between gap-x-2">
                      <Link
                        href={{
                          pathname: "/projects/",
                          query: {
                            type: query?.type || "all",
                            project: slug,
                          },
                        }}
                      >
                        <span className="pr-8">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        {name}
                      </Link>
                      <div className="inline-flex gap-x-2">
                        {featured && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <IconStarFilled className="size-5 text-background dark:text-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p
                                  className={cn(
                                    buttonVariants({ size: "extra-small" }),
                                  )}
                                >
                                  Featured Project
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <IProyectType
                                className={cn("size-5", {
                                  "text-[#84BE7E]": type === "development",
                                  "text-[#9873C6]": type === "automation",
                                })}
                                type={type}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p
                                className={cn(
                                  buttonVariants({ size: "extra-small" }),
                                )}
                              >
                                {types.find((x) => x.slug === type)?.label ||
                                  "Software"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionContent index={index}>
                    <div className="flex flex-col justify-end gap-y-2">
                      <span className="line-clamp-5 gap-x-2 text-16 font-normal tablet:line-clamp-3">
                        {link && (
                          <LinkPreview
                            className="font-bold text-background underline underline-offset-4 dark:text-foreground"
                            url={link.url}
                          >
                            {link?.label}
                          </LinkPreview>
                        )}{" "}
                        {description}
                      </span>
                      <Link
                        href={`/projects/${slug}`}
                        className={cn(
                          buttonVariants({ variant: "navigation-link" }),
                          "flex-shrink-0 cursor-pointer place-self-end text-background dark:text-foreground",
                        )}
                      >
                        see more
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ),
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
