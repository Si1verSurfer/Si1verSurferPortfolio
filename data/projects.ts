export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
  role: string;
  project_url: string;
  is_featured: boolean;
  is_mobile_app: boolean;
  images: string[];
  defaultImageIndex?: number;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "C2 Server Platform",
    slug: "c2-server-platform",
    description:
      "A full stack Command & Control (C2) server built for managing secure client communications. The system includes a React.js dashboard for monitoring and control, and a high-performance Golang backend responsible for handling concurrent connections, authentication, and command execution workflows.",
    tech_stack: ["React.js", "Golang", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    is_mobile_app: false,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/C2_server_images/C2Server.png",
    ],
  },
  {
    id: 2,
    title: "Haykl Real Estate Platform",
    slug: "haykl-real-estate-platform",
    description:
      "A comprehensive real estate ecosystem consisting of three Flutter mobile applications (User, Seller, Admin) and a React.js web platform. The system enables property listings, map-based searching, real-time updates, and role-based access.",
    tech_stack: ["Flutter", "React.js", "Firebase", "Google Maps API", "GetX"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    is_mobile_app: true,
    defaultImageIndex: 2,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/Screenshot%202026-01-28%20at%2012.27.56%E2%80%AFAM.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/%D8%A7%D9%84%D9%85%D9%81%D8%B6%D9%84%D8%A9%20copy.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9.png",
    ],
  },
  {
    id: 3,
    title: "IEL Logistics & Shipping System",
    slug: "iel-logistics-shipping-system",
    description:
      "A cross-platform logistics and shipping solution built for the Saudi market. The application integrates directly with Odoo ERP using odooRPC and a custom Flask backend to manage shipments, tracking, and customer operations.",
    tech_stack: ["Flutter", "Python Flask", "Odoo ERP", "SQLite", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    is_mobile_app: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Create%20Trip.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Home.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Shipment%20Details.png",
    ],
  },
  {
    id: 4,
    title: "Surah Islamic Life Application",
    slug: "surah-islamic-life-app",
    description:
      "An Islamic lifestyle mobile application focused on Quran reading and daily worship utilities. The app features a custom-built SQLite database optimized for over 6,000 Quranic verses, offline access, prayer times, Qibla direction, and Azkar.",
    tech_stack: ["Flutter", "SQLite", "Device Sensors", "GPS"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    is_mobile_app: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen%202.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen%203.png",
    ],
  },
  {
    id: 5,
    title: "Talabaty Delivery App",
    slug: "talabaty-delivery-app",
    description:
      "A Flutter-based food and delivery application designed with a clean UI and scalable architecture. The app focuses on smooth navigation, store browsing, and an optimized ordering experience.",
    tech_stack: ["Flutter", "REST-ready Architecture"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    is_mobile_app: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Splash.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Main%20Screen.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Store.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
