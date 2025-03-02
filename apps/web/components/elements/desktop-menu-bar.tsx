import Link from "next/link";
import { buttonVariants } from "../ui/button";
export default function DesktopMenuBar() {
  return (
    <div className="hidden items-center gap-x-2 tablet:flex">
      <Link
        className={buttonVariants({ variant: "navigation-link" })}
        href="/projects"
      >
        projects
      </Link>
      <Link
        className={buttonVariants({ variant: "navigation-link" })}
        href="/about"
      >
        about
      </Link>
      <Link
        href="mailto:jamc.mejia@gmail.com?subject=Contact From Portfolio Website"
        className={buttonVariants({ variant: "secondary", size: "large" })}
      >
        Get in touch
      </Link>
    </div>
  );
}
