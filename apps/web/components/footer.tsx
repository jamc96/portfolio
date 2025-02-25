import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconCode,
  IconFileCv,
} from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./elements/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Footer() {
  return (
    <footer className="container sticky inset-x-0 bottom-0 z-40 flex w-full items-center justify-between border-t border-background bg-background/75 py-4 backdrop-blur-lg desktop:py-10">
      {/* left */}
      <div className="hidden items-center gap-x-2 tablet:inline-flex">
        <Link target="_blank" href="https://x.com/jamcmejia1">
          <IconBrandX className="text-foreground hover:text-primary" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/jose-alfredo-mejia"
        >
          <IconBrandLinkedin className="text-foreground hover:text-primary" />
        </Link>
        <Link href="mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website">
          <IconBrandGmail className="text-foreground hover:text-primary" />
        </Link>
        <Link target="_blank" href="/cv_josemejia.pdf">
          <IconFileCv className="text-foreground hover:text-primary" />
        </Link>
      </div>
      {/* center */}
      <div className="inline-flex items-center gap-x-2">
        <p>©</p>
        <span className="font-bold">2025</span>
        <Link
          target="_blank"
          href="https://github.com/jamc96/portfolio"
          className="group inline-flex items-center gap-x-2"
        >
          {"|"}

          <span className="text-foreground">Built with 💜</span>
          <div className="inline-flex items-center justify-center gap-x-2">
            <IconCode className="size-4" />
            <span
              className={cn(
                buttonVariants({ variant: "navigation-link" }),
                "hidden tablet:inline-flex",
              )}
            >
              View on Github
            </span>
          </div>
        </Link>
      </div>
      {/* right */}
      <div className="inline-flex items-center gap-x-2">
        {/* <span className="font-bold text-neutral">En</span> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>En</TooltipTrigger>
            <TooltipContent>
              <p>Translation coming soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <ModeToggle />
      </div>
    </footer>
  );
}
