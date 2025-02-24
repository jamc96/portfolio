"use client";

import { useClientLocale } from "@/lib/i18n/client";
import { i18n } from "@/lib/i18n/types";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ClientCustomLink({ href, ...props }: CustomLinkProps) {
  const locale = useClientLocale();
  const isDefaultLocale = locale === i18n.defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;

  return <Link href={path} {...props} />;
}
