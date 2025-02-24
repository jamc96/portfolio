import { getServerLocale } from "@/lib/i18n/server";
import { i18n } from "@/lib/i18n/types";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export const CustomLink = async ({ href, ...props }: CustomLinkProps) => {
  const locale = await getServerLocale();
  const isDefaultLocale = locale === i18n.defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;
  return <Link href={path} {...props} />;
};
