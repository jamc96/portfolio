import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";
import ComingSoonText from "../elements/coming-soon-text";

interface CustomImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "alt"> {
  url?: string;
  alternativeText: string;
  className: string;
  width?: number;
  height?: number;
  fill?: boolean;
  documentId?: string;
  name?: string;
}
export const CustomImage = ({
  className,
  url,
  alternativeText,
  width,
  height,
  fill = false,
  documentId,
  ...props
}: CustomImageProps) =>
  url ? (
    <Image
      id={documentId}
      className={cn("object-cover object-center", className)}
      src={url}
      alt={alternativeText}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      {...props}
    />
  ) : (
    <ComingSoonText />
  );
