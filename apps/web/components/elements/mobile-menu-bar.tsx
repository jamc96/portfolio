"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconComponents,
  IconFileCv,
  IconMenu2,
  IconUser,
} from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import MobileMenuModal from "../ui/mobile-menu-modal";

export default function MobileMenuBar() {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) {
      setOpen(false);
    }
  };
  return (
    <div
      className={
        "flex h-10 flex-none flex-row items-center justify-between border border-foreground px-4 py-2 tablet:hidden"
      }
    >
      <div className="z-50 flex w-full justify-end">
        <IconMenu2
          className="cursor-pointer text-foreground hover:text-primary"
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <MobileMenuModal setOpen={setOpen}>
            <div
              className="flex w-full flex-col gap-y-12"
              onClick={handleClick}
            >
              <div className="mt-12 flex flex-col gap-y-6 px-6 text-16 font-semibold">
                <Link
                  className="inline-flex cursor-pointer items-center justify-between rounded-md bg-secondary px-6 py-2 text-secondary-foreground"
                  href="/projects"
                >
                  Projects
                  <IconComponents />
                </Link>
                <Link
                  className="inline-flex cursor-pointer items-center justify-between rounded-md bg-secondary px-6 py-2 text-secondary-foreground"
                  href="/about"
                >
                  About
                  <IconUser />
                </Link>
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <Link
                  href="mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                    }),
                    "mx-6 text-primary-foreground",
                  )}
                >
                  Get in touch
                </Link>
                <div className="flex items-center justify-center gap-x-2">
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
              </div>
            </div>
          </MobileMenuModal>
        )}
      </AnimatePresence>
    </div>
  );
}
