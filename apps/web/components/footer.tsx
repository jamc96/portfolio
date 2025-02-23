import { IconCode } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-12 w-full items-center justify-center space-x-2 bg-black text-foreground tablet:bg-transparent">
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
          <span className="hidden group-hover:underline desktop:inline-block">
            View on Github
          </span>
        </div>
      </Link>
    </footer>
  );
}
