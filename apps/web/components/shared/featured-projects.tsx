import { getFeaturedProjects } from "@/app/action/projects";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "../elements/accordion";
import { buttonVariants } from "../ui/button";

export const FeaturedProjects = async () => {
  const projects = await getFeaturedProjects();
  return (
    <div className="flex w-full flex-col">
      <h3 className="inline-flex items-center gap-8 self-center p-4 text-20 desktop:self-start">
        <IconStarFilled className="size-5 text-foreground" /> Featured Projects
      </h3>
      <Accordion>
        {projects.map(({ name, slug, description }, index) => (
          <AccordionItem key={`accordion-${index}`} index={index}>
            <AccordionHeader index={index}>
              <span className="pr-8">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {name}
            </AccordionHeader>
            <AccordionContent index={index}>
              <div className="flex flex-col justify-end">
                <span className="text-16 font-normal">{description}</span>
                <Link
                  href={`/projects/${slug}`}
                  className={cn(
                    "flex-shrink-0 cursor-pointer place-self-end",
                    buttonVariants({ variant: "navigation-link" }),
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
