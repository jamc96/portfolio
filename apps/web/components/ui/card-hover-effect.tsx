"use client";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LinkPreview } from "./link-preview";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    label: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "md:grid-cols-2 lg:grid-cols-3 grid w-full grid-cols-1 py-10",
        className,
      )}
    >
      {items.map(({ link, title, description, label, tags }, index) => (
        <div
          key={`card-hover-item-${index}`}
          className="group relative col-span-1 block p-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block h-full w-full bg-blue-500 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="group/card relative z-20 w-full">
            <div className="card relative flex h-72 flex-col justify-between overflow-hidden bg-blue-500 p-4 shadow-xl">
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50 transition duration-300 group-hover/card:opacity-70"></div>
              <div className="z-10 flex flex-row items-center space-x-2">
                <IconStarFilled className="h-10 w-10 rounded-full bg-gray-200 object-cover p-2 text-blue-500 group-hover/card:bg-blue-500 group-hover/card:text-gray-200" />
                <div className="flex flex-col">
                  <p className="relative text-base font-normal text-gray-50 group-hover/card:font-semibold">
                    {label}
                  </p>
                  <p className="text-sm text-gray-400 group-hover/card:text-gray-200">
                    {tags &&
                      tags
                        .slice(0, 3)
                        .map((tag, index) => (
                          <span key={`tag-${index}`}>{`${tag} ${
                            index !== 2 ? "| " : ""
                          }`}</span>
                        ))}
                  </p>
                </div>
              </div>
              <div className="text content z-20">
                <LinkPreview
                  url={link}
                  className="md:text-2xl relative line-clamp-2 text-xl font-bold text-gray-50 group-hover/card:bg-blue-500"
                >
                  {title}
                </LinkPreview>
                <p className="relative z-10 my-4 line-clamp-4 text-sm font-normal text-gray-300 group-hover/card:text-gray-50">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
