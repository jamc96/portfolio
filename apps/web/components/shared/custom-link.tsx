import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  url?: string;
  documentId?: string;
  label?: string;
  children?: string;
}
export const CustomLink = ({
  className,
  url,
  children,
  label,
  documentId,
  variant,
  size,
  ...props
}: LinkProps) =>
  url ? (
    <Link
      href={url}
      id={documentId}
      className={clsx(buttonVariants({ variant, size, className }))}
      prefetch={true}
      {...props}
    >
      {children || label}
    </Link>
  ) : null;
