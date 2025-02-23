import ComingSoonText from "@/components/elements/coming-soon-text";

export default async function Project({}: {
  params: Promise<{ slug: string }>;
}) {
  return <ComingSoonText />;
}
