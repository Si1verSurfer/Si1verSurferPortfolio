export type ServicePlan = {
  id: string;
  featured?: boolean;
  icon:
    | "smartphone"
    | "monitor"
    | "layers"
    | "sparkles"
    | "server"
    | "palette"
    | "workflow"
    | "building";
};

/** Business funnel order: design → build → systems → complete */
export const SERVICE_PLANS: ServicePlan[] = [
  { id: "uiux", icon: "palette" },
  { id: "mobile", icon: "smartphone" },
  { id: "web", icon: "monitor", featured: true },
  { id: "backend", icon: "server" },
  { id: "automations", icon: "workflow" },
  { id: "odoo", icon: "building" },
  { id: "ai", icon: "sparkles" },
  { id: "full", icon: "layers" },
];
