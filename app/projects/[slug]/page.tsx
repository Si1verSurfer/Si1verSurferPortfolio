import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ProjectDetailClient } from "@/components/portfolio/project-detail/project-detail-client";
import { absoluteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const pageUrl = absoluteUrl(`/projects/${slug}`);
  const imageUrl = absoluteUrl(project.image);
  const title = project.title;
  const description = project.description;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        ar: pageUrl,
        en: `${pageUrl}?lang=en`,
        "x-default": pageUrl,
      },
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${title} | Bashar Rizk`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bashar Rizk`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
