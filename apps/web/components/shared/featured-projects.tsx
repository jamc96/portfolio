import { cn, getProyectTypes } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "../elements/accordion";
import { buttonVariants } from "../ui/button";
import { LinkPreview } from "../ui/link-preview";
import { IProyectType } from "@/lib/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { fetchAPI } from "@/lib/api";
import { Project } from "@/lib/types";

export const FeaturedProjects = async ({ title }: { title: string }) => {
  const projects = await fetchAPI<Project[]>({
    path: "/api/projects",
    query: {
      populate: {
        link: {
          fields: ["label", "url"],
        },
      },
    },
  });
  const types = getProyectTypes();
  return (
    <div className="flex w-full flex-col">
      <h2 className="inline-flex items-center gap-8 self-center p-4 text-20 capitalize desktop:self-start">
        <IconStarFilled className="size-5 text-foreground" /> {title}
      </h2>
      <Accordion>
        {projects &&
          projects.map(({ name, slug, description, link, type }, index) => (
            <AccordionItem key={`accordion-${index}`} index={index}>
              <AccordionHeader index={index}>
                <div className="flex w-full justify-between gap-x-8">
                  <div>
                    <span className="pr-8">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {name}
                  </div>
                  <div>
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
                  <span className="line-clamp-5 text-16 font-normal tablet:line-clamp-3">
                    {link && (
                      <LinkPreview
                        className="font-bold text-background underline underline-offset-4 dark:text-foreground"
                        url={link.url}
                      >
                        {link?.label}{" "}
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
          ))}
      </Accordion>
    </div>
  );
};
