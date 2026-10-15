import type { ProjectTagId } from "@/data/project-tags";

export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  categories: string[];
  tags: ProjectTagId[];
  tech_stack: string[];
  role: string;
  project_url: string;
  app_store_url?: string;
  is_featured: boolean;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bori",
    slug: "bori",
    description:
      "Book a driver for your family — now or later, with live tracking.",
    categories: ["Mobile App", "Family transport"],
    tags: ["mobile", "live-store"],
    tech_stack: ["Flutter", "Firebase", "Google Maps"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url:
      "https://apps.apple.com/eg/app/bori-%D8%A8%D9%88%D8%B1%D9%8A/id6795601647",
    is_featured: true,
    image: "/projects/bori.png",
  },
  {
    id: 9,
    title: "Bori Driver",
    slug: "bori-driver",
    description:
      "The driver app for Bori — KYC, trips, maps, and earnings for certified drivers.",
    categories: ["Mobile App", "Family transport"],
    tags: ["mobile", "live-store"],
    tech_stack: ["Flutter", "Firebase", "Google Maps"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url: "https://apps.apple.com/eg/app/bori-driver/id6797534408",
    is_featured: false,
    image: "/projects/bori.png",
  },
  {
    id: 2,
    title: "Haykal",
    slug: "haykal",
    description:
      "Browse properties and follow construction projects in one place.",
    categories: ["Mobile App", "Real Estate"],
    tags: ["mobile", "ecommerce", "live-store"],
    tech_stack: ["Flutter", "Firebase", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url:
      "https://apps.apple.com/eg/app/%D9%87-%D9%8A-%D9%83-%D9%84/id6738863591",
    is_featured: true,
    image: "/projects/haykal.png",
  },
  {
    id: 3,
    title: "مطلوب طبي | Mtloob",
    slug: "mtloob-medical",
    description:
      "Medical RFQs and supplier catalogs — practitioners and buyers reach vendors directly, without a middleman.",
    categories: ["Mobile App", "Healthcare marketplace"],
    tags: ["mobile", "ecommerce", "live-store"],
    tech_stack: ["Flutter", "Firebase", "RFQ", "Push notifications"],
    role: "Mobile Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url:
      "https://apps.apple.com/us/app/%D9%85%D8%B7%D9%84%D9%88%D8%A8-%D8%B7%D8%A8%D9%9A-mtloob/id6753684200",
    is_featured: false,
    image: "/projects/mtloob-medical.png",
  },
  {
    id: 4,
    title: "Rafiq Al-Dhikr",
    slug: "rafiq-al-dhikr",
    description:
      "Quran, prayer times, and dhikr — quiet tools for everyday use.",
    categories: ["Mobile App", "Islamic Tech"],
    tags: ["mobile", "islamic", "live-store"],
    tech_stack: ["Flutter", "SQLite", "GPS"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url:
      "https://apps.apple.com/eg/app/%D8%B1%D9%81%D9%8A%D9%82-%D8%A7%D9%84%D8%B0%D9%83%D8%B1-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-%D8%A7%D9%84%D8%A3%D8%B0%D9%83%D8%A7%D8%B1/id6759368731",
    is_featured: false,
    image: "/projects/rafiq-al-dhikr.png",
  },
  {
    id: 5,
    title: "Zoro Delivery",
    slug: "zoro-delivery",
    description:
      "Order, deliver, and manage — apps for customers, drivers, and admins.",
    categories: ["Mobile App", "Web Dashboard"],
    tags: ["mobile", "web", "ecommerce"],
    tech_stack: ["Flutter", "React.js", "Node.js"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/zoro-delivery.png",
  },
  {
    id: 6,
    title: "Safer Travel",
    slug: "safer-travel",
    description:
      "Search flights, hotels, and trips without the clutter.",
    categories: ["Web App", "Travel"],
    tags: ["web"],
    tech_stack: ["React.js", "Next.js", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/safer-travel.png",
  },
  {
    id: 7,
    title: "ILEX Logistics",
    slug: "ilex-logistics",
    description:
      "Create a shipment and watch it move on the map.",
    categories: ["Mobile App", "Logistics"],
    tags: ["mobile"],
    tech_stack: ["Flutter", "Flask", "Maps API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/ilex-logistics.png",
  },
  {
    id: 8,
    title: "Joman Al-Thikr",
    slug: "joman-al-thikr",
    description:
      "Read, bookmark, and return — a calm space for daily worship.",
    categories: ["Mobile App", "Islamic Tech"],
    tags: ["mobile", "islamic", "live-store"],
    tech_stack: ["Flutter", "SQLite", "Clean Architecture"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    app_store_url:
      "https://apps.apple.com/eg/app/%D8%AC-%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D9%87-%D8%AF-%D9%89/id6790181128",
    is_featured: false,
    image: "/projects/joman-al-thikr.png",
  },
  {
    id: 10,
    title: "Rafiq Al Umrah",
    slug: "rafiq-al-umrah",
    description:
      "A smart Umrah companion — step-by-step rituals, Makkah maps, offline guides, family tracking, and an AI assistant for calm guidance on the ground.",
    categories: ["Mobile App", "Umrah & travel"],
    tags: ["mobile", "islamic"],
    tech_stack: ["Flutter", "Maps", "AI Assistant", "Offline mode"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/rafiq-al-umrah.jpg",
  },
  {
    id: 11,
    title: "Bobo Ala Bab",
    slug: "bobo-ala-bab",
    description:
      "Groceries, produce, meat, and household essentials from nearby stores — browsed, carted, and delivered to your door with a clear Arabic-first experience.",
    categories: ["Mobile App", "Grocery delivery"],
    tags: ["mobile", "ecommerce"],
    tech_stack: ["Flutter", "Firebase", "Payments", "Maps"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/bobo-ala-bab.jpg",
  },
  {
    id: 12,
    title: "JUMÉRA",
    slug: "jumera",
    description:
      "Premium lighting and home décor — a bilingual storefront and mobile app with curated collections, warm branding, and a checkout flow built for trust.",
    categories: ["Web & Mobile", "E-commerce"],
    tags: ["mobile", "web", "ecommerce"],
    tech_stack: ["Next.js", "Flutter", "E-commerce", "UI/UX"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/jumera.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.is_featured);
}

/** Next projects in catalog order (wraps), excluding the current slug. */
export function getRelatedProjects(slug: string, count = 3): Project[] {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return PROJECTS.filter((p) => p.slug !== slug).slice(0, count);

  const related: Project[] = [];
  for (let step = 1; step < PROJECTS.length && related.length < count; step++) {
    const next = PROJECTS[(index + step) % PROJECTS.length];
    if (next.slug !== slug) related.push(next);
  }
  return related;
}
