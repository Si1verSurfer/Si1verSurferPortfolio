/**
 * Portfolio identity. Avatar: GitHub raw URL (or set to `/profile.jpg` in `public/` for a local file).
 * @see https://github.com/Si1verSurfer/my_port_images_db/blob/main/projects/my_images/IMG_0769%20copy.jpg
 */
const AVATAR_FROM_REPO =
  "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/my_images/IMG_0769%20copy.jpg";

export const portfolioProfile = {
  name: "Bashar Rizk",
  alias: "Si1ver Surfer",
  title: "Software Engineer",
  summary:
    "Software Engineer and AI Specialist with a strong foundation in Flutter, Node.js, and Go. Programming since age 15, I have delivered 8+ cross-platform mobile applications and a specialized AI system for medical diagnostics. Expert in building scalable, user-centric architectures using Clean Architecture, GetX, and BLOC.",
  avatarSrc: AVATAR_FROM_REPO,
} as const;
