import AnimateEntrance from "@/components/elements/animate-entrance";
import { CustomImage } from "@/components/shared/custom-image";
import { CustomLink } from "@/components/shared/custom-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { fetchAPI } from "@/lib/api";
import {
  Category,
  Image as TImage,
  Link as TLink,
  Technology,
  Word,
} from "@/lib/types";

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
interface APIAboutProps {
  title: string;
  description: string;
  cover: TImage;
  skills: Array<Technology>;
  additionalSkills: Array<Category>;
  languages: Array<Word>;
  link: TLink;
}
export default async function About() {
  const {
    cover,
    title,
    description,
    skills,
    additionalSkills,
    languages,
    link,
  } = await fetchAPI<APIAboutProps>({
    path: "/api/about",
    query: {
      populate: {
        cover: {
          fields: ["url", "alternativeText", "width", "height"],
        },
        skills: {
          fields: ["name"],
        },
        additionalSkills: {
          fields: ["name"],
        },
        languages: {
          fields: ["label"],
        },
        link: {
          fields: ["label", "url", "variant", "size"],
        },
      },
    },
  });

  return (
    <>
      <section className="container relative desktop:max-w-screen-tablet">
        <div className="flex flex-col items-center justify-center gap-y-6">
          {/* profile image */}
          <div className="relative size-[12rem]">
            <AnimateEntrance>
              <CustomImage
                {...cover}
                className="h-full w-full rounded-md object-cover"
              />
            </AnimateEntrance>
          </div>
          {/* profile details */}
          <div className="inline-flex flex-col items-center">
            <h1 className="font-heading text-24 font-semibold">{title}</h1>
            <p className="text-center text-16">{description}</p>
          </div>
          {/* Download resume */}
          <CustomLink
            {...link}
            target="_blank"
            className={buttonVariants({ size: "large" })}
          >
            Download Resume
          </CustomLink>
          {/* Extra details */}
          <div className="flex flex-col items-center gap-y-4 rounded-t-md bg-secondary px-4 py-6 text-secondary-foreground">
            {/* Content blocks */}
            {skills && (
              <ContentBlock
                items={skills.map(({ name }) => name)}
                label="technical skills"
              />
            )}
            {languages && (
              <ContentBlock
                items={languages.map(({ label }) => label)}
                label="languages"
              />
            )}
            {additionalSkills && (
              <ContentBlock
                items={additionalSkills.map(({ name }) => name)}
                label="additional skills"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
