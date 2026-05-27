import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "peoplegrove-em2",
    role: "Engineering Manager II",
    company: "PeopleGrove",
    companyUrl: "https://www.peoplegrove.com",
    period: "2023 – Present",
    duration: "2+ years",
    location: "Remote",
    description:
      "Leading engineering strategy and delivery for PeopleGrove's career access and mentorship platform — trusted by 500+ higher-education institutions to connect students, alumni, and mentors at scale.",
    highlights: [
      "Manage and grow a cross-functional engineering team, driving hiring, roadmap planning, and bi-weekly sprint cycles with a focus on quality and velocity.",
      "Architecting and delivering multi-tenant SaaS features — mentorship matching, alumni communities, experiential learning management, and enrollment-support workflows.",
      "Partnering with product and design leadership to define the 12-month technical roadmap, aligning engineering capacity to company OKRs.",
      "Driving platform reliability improvements — reduced p99 API latency by 35% through query optimisation and Redis caching across critical user paths.",
      "Established engineering best-practices playbook including code-review standards, on-call runbooks, and observability tooling.",
    ],
    tags: ["React", "NestJS", "TypeScript", "PostgreSQL", "Redis", "AWS", "Node.js"],
    isFeatured: true,
  },
  {
    id: "peoplegrove-em",
    role: "Engineering Manager",
    company: "PeopleGrove",
    companyUrl: "https://www.peoplegrove.com",
    period: "2022 – 2023",
    duration: "1 year",
    location: "Remote",
    description:
      "Transitioned from senior individual contributor to first-time engineering manager, taking ownership of team health, delivery predictability, and technical direction.",
    highlights: [
      "Led a team of 6 engineers across full-stack product development for mentorship and career-readiness features.",
      "Designed and shipped multi-tenant database architecture supporting institution-level data isolation for 500+ clients.",
      "Introduced structured 1:1 cadences, performance review frameworks, and growth paths for IC engineers.",
      "Collaborated with customer success to translate enterprise client requirements into prioritised engineering epics.",
    ],
    tags: ["React", "NestJS", "TypeScript", "PostgreSQL", "Multi-tenant Architecture"],
    isFeatured: false,
  },
  {
    id: "peoplegrove-senior",
    role: "Senior Software Engineer",
    company: "PeopleGrove",
    companyUrl: "https://www.peoplegrove.com",
    period: "2021 – 2022",
    duration: "1 year",
    location: "Remote",
    description:
      "Senior full-stack engineer driving complex feature delivery across the platform's mentorship network, alumni engagement, and career services modules.",
    highlights: [
      "Built and shipped end-to-end mentorship matching algorithms and notification infrastructure using NestJS and PostgreSQL.",
      "Redesigned the alumni engagement module — improving session load time by 40% through lazy loading and query batching.",
      "Mentored junior engineers, conducted tech-talks, and participated in architecture review committees.",
    ],
    tags: ["React", "NestJS", "TypeScript", "PostgreSQL", "Node.js"],
    isFeatured: false,
  },
  {
    id: "peoplegrove-sde2",
    role: "Software Engineer II",
    company: "PeopleGrove",
    companyUrl: "https://www.peoplegrove.com",
    period: "Apr 2021 – 2021",
    duration: "6 months",
    location: "Remote",
    description:
      "Joined PeopleGrove as a mid-level full-stack engineer, contributing to product development across React front-end and NestJS back-end services.",
    highlights: [
      "Delivered front-end features for the student career-readiness dashboard in React + TypeScript.",
      "Developed RESTful API endpoints for job opportunity management and skill-building modules.",
      "Participated in on-call rotations and contributed to reducing system downtime incidents.",
    ],
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    isFeatured: false,
  },
  {
    id: "kroger",
    role: "Full-Stack Engineer — Dynamic Pricing & Promotions",
    company: "Kroger Technology",
    period: "Before 2021",
    duration: "Prior",
    location: "Remote",
    description:
      "Worked on Kroger's next-generation dynamic pricing and promotions platform — a system enabling real-time price changes and personalised offers across thousands of stores.",
    highlights: [
      "Built features for the dynamic promotions engine, enabling flash deals, digital weekly circulars, and personalised offers based on customer demographics and purchase history.",
      "Integrated GIS (Geographic Information System) tooling to map competitor store locations and inform competitive pricing decisions at a per-store level.",
      "Replaced paper-tag pricing workflows with an instant digital update system, reducing promotion deployment time from days to seconds.",
      "Developed customer segmentation APIs to tailor promotional offers based on purchasing behaviour and location data.",
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "GIS", "REST APIs"],
    isFeatured: false,
  },
];
