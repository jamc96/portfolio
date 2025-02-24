import { cn } from "@/lib/utils";
import Link from "next/link";
export default function NavigationBarBrand({
  orientation = "horizontal",
}: {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn("flex items-center", {
        "gap-x-4": !orientation || orientation === "horizontal",
        "flex flex-col": !orientation || orientation === "vertical",
      })}
    >
      <Link href="/" className="group flex flex-col items-start">
        <p className="rounded-lg px-4 py-2 font-heading text-24 font-extrabold group-hover:bg-primary group-hover:text-background dark:text-foreground dark:group-hover:text-foreground tablet:text-32 desktop:text-40">
          Jose
          <span className="text-primary group-hover:text-background dark:group-hover:text-foreground">
            Mejia
          </span>
        </p>
      </Link>
    </div>
  );
}
