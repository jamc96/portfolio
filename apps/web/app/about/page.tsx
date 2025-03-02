import AnimateEntrance from "@/components/elements/animate-entrance";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ContentBlock = ({
  items,
  label,
}: {
  label: string;
  items: Array<string>;
}) => (
  <>
    <h3 className="text-center text-20 font-semibold capitalize text-background dark:text-foreground">
      {label}
    </h3>
    <div className="inline-flex w-full flex-wrap justify-center gap-2">
      {items.map((name, index) => (
        <Button key={`category-${index}`} size="small" variant="secondary">
          {name}
        </Button>
      ))}
    </div>
  </>
);
export default function About() {
  return (
    <>
      <section className="container relative desktop:max-w-screen-tablet">
        <div className="flex flex-col items-center justify-center gap-y-6">
          {/* profile image */}
          <div className="relative size-[12rem]">
            <AnimateEntrance>
              <Image
                src="/profile.png"
                alt="project image"
                className="h-full w-full rounded-md object-cover"
                fill
              />
            </AnimateEntrance>
          </div>
          {/* profile details */}
          <div className="inline-flex flex-col items-center">
            <h1 className="font-heading text-24 font-semibold">
              Senior Full Stack Developer
            </h1>
            <p className="text-center text-16">
              With over 8 years of experience in web development and DevOps, I
              specialize in creating great user experiences and delivering
              powerful solutions that drive results
            </p>
          </div>
          {/* Download resume */}
          <Link
            target="_blank"
            href="/resume_josemejia.pdf"
            className={buttonVariants({ size: "large" })}
          >
            Download Resume
          </Link>
          {/* Extra details */}
          <div className="flex flex-col items-center gap-y-4 rounded-t-md bg-secondary px-4 py-6 text-secondary-foreground">
            {/* Content blocks */}
            <ContentBlock
              items={[
                "Next.js",
                "React",
                "Strapi",
                "Tailwindcss",
                "Docker",
                "Node",
                "Kubernetes",
                "Typescript",
              ]}
              label="technical skills"
            />
            <ContentBlock items={["Spanish", "English"]} label="languages" />
            <ContentBlock
              items={[
                "Leadership",
                "DevOps",
                "Mentorship",
                "UI/UX",
                "SEO",
                "Performance",
                "Software Architecture",
              ]}
              label="additional skills"
            />
          </div>
        </div>
      </section>
    </>
  );
}
