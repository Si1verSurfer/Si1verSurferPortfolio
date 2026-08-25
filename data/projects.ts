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
      "Book a driver for your family — now or later, with live tracking.",
    categories: ["Mobile App", "Family transport"],
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
      "Browse properties and follow construction projects in one place.",
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
      "Clinics order medical supplies from trusted vendors, simply.",
    categories: ["Mobile App", "Healthcare"],
    tech_stack: ["Flutter", "Node.js", "Firebase"],
    role: "Mobile Developer",
    project_url: "https://github.com/Si1verSurfer",
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
    tech_stack: ["Flutter", "SQLite", "GPS"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
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
