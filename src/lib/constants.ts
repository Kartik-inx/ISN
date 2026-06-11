export const siteConfig = {
  name: "It Stops Now",
  tagline: "Standing Up for the Police Family",
  description:
    "A campaign dedicated to advocating for police officers, honoring those who have served, and supporting the wellbeing of the entire police family.",
  url: "https://itstopsnow.org",
  supporterName: "Pocket Sergeant",
  supporterUrl: "#",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Issue", href: "/the-issue" },
  { label: "News", href: "/news" },
  { label: "Stories", href: "/stories" },
  { label: "Wall of Remembrance", href: "/remembrance" },
  { label: "Research and Evidence", href: "/research" },
  { label: "Recover and Support", href: "/recovery" },
  { label: "Take Actions", href: "/take-action" },
] as const;

export const impactStats = [
  { value: 14000, suffix: "+", label: "Officers Affected Annually", icon: "shield" },
  { value: 350, suffix: "+", label: "Stories Shared", icon: "message" },
  { value: 50000, suffix: "+", label: "Supporters Nationwide", icon: "users" },
  { value: 30, suffix: "+", label: "Years of Combined Service", icon: "clock" },
] as const;

export const objectives = [
  {
    title: "Raise Awareness",
    description: "Shining a light on the challenges faced by serving and retired police officers and their families.",
    icon: "megaphone",
  },
  {
    title: "Drive Policy Change",
    description: "Campaigning for meaningful reforms that protect and support the police family at every level.",
    icon: "scale",
  },
  {
    title: "Support Recovery",
    description: "Connecting officers and families with mental health resources, peer networks, and professional support.",
    icon: "heart",
  },
  {
    title: "Honour & Remember",
    description: "Creating lasting tributes to those who have given their all in service, ensuring they are never forgotten.",
    icon: "candle",
  },
  {
    title: "Build Community",
    description: "Uniting the police family — serving officers, retirees, families, and supporters — through shared purpose.",
    icon: "community",
  },
  {
    title: "Gather Evidence",
    description: "Conducting and compiling research to expose the true scale of the issues and inform meaningful solutions.",
    icon: "chart",
  },
] as const;
