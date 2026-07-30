export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  categories: string[];
  tech_stack: string[];
  role: string;
  project_url: string;
  is_featured: boolean;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bori",
    slug: "bori",
    description:
      "Private driver rental platform for families — instant and scheduled trips, live tracking, subscriptions, and a complete driver coordination flow.",
    categories: ["Mobile App", "UI/UX Design"],
    tech_stack: ["Flutter", "Firebase", "Google Maps"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/bori.png",
  },
  {
    id: 2,
    title: "Haykal",
    slug: "haykal",
    description:
      "Real estate and construction ecosystem with property listings, project tracking, service categories, and detailed case-study views for buyers and developers.",
    categories: ["Mobile App", "Real Estate"],
    tech_stack: ["Flutter", "Firebase", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/haykal.png",
  },
  {
    id: 3,
    title: "Mtloob Medical",
    slug: "mtloob-medical",
    description:
      "B2B medical supplies marketplace connecting healthcare providers with verified suppliers, RFQs, smart notifications, and direct contact flows.",
    categories: ["Mobile App", "Healthcare"],
    tech_stack: ["Flutter", "Node.js", "Firebase"],
    role: "Mobile Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/mtloob-medical.png",
  },
  {
    id: 4,
    title: "Rafiq Al-Dhikr",
    slug: "rafiq-al-dhikr",
    description:
      "Comprehensive Islamic lifestyle app with Quran, Hadith, prayer times, Azkar, Qibla direction, and a polished spiritual daily-use experience.",
    categories: ["Mobile App", "Islamic Tech"],
    tech_stack: ["Flutter", "SQLite", "GPS"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/rafiq-al-dhikr.png",
  },
  {
    id: 5,
    title: "Zoro Delivery",
    slug: "zoro-delivery",
    description:
      "Multi-service delivery platform with customer and driver apps plus admin dashboards for orders, regions, analytics, and branch management.",
    categories: ["Mobile App", "Web Dashboard"],
    tech_stack: ["Flutter", "React.js", "Node.js"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/zoro-delivery.png",
  },
  {
    id: 6,
    title: "Safer Travel",
    slug: "safer-travel",
    description:
      "Travel booking platform for flights, hotels, car rentals, and activities — with offers, partner integrations, and a smart trip planner experience.",
    categories: ["Web App", "Travel"],
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
      "Shipping and logistics platform with shipment creation, live tracking maps, status timelines, and enterprise-grade delivery workflows.",
    categories: ["Mobile App", "Logistics"],
    tech_stack: ["Flutter", "Flask", "Maps API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    image: "/projects/ilex-logistics.png",
  },
  {
    id: 8,
    title: "Joman Al-Thikr",
    slug: "joman-al-thikr",
    description:
      "Premium Islamic platform featuring Quran reading, Azkar, prayer times, lessons library, bookmarks, and customizable reading themes.",
    categories: ["Mobile App", "Islamic Tech"],
    tech_stack: ["Flutter", "SQLite", "Clean Architecture"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    image: "/projects/joman-al-thikr.png",
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
