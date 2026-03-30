import {
  FaReact,
  FaMobileAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaDocker,
  FaFigma,
  FaFire,
  FaSearch,
  FaRocket,
  FaAward,
  FaStar,
  FaClock,
  FaCodeBranch,
  FaLink,
  FaCogs,
  FaShieldAlt,
  FaCode,
  FaEnvelope,
  FaDesktop,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiNginx,
  SiFirebase,
  SiVercel,
  SiApachekafka,
  SiVscodium,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // { label: 'Projects', href: '#projects' },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { icon: FaAward, value: 10, suffix: "+", label: "Projects Done" },
  { icon: FaStar, value: 5, suffix: "+", label: "Happy Clients" },
  { icon: FaClock, value: 1, suffix: "+ Yrs", label: "Experience" },
  { icon: FaCodeBranch, value: 1000, suffix: "+", label: "Code Commits" },
];

export const SKILLS = {
  Frontend: [
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaMobileAlt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "GraphQL", icon: SiGraphql },
    { name: "REST APIs", icon: TbApi },
    { name: "Microservices", icon: MdMiscellaneousServices },
    { name: "Python", icon: FaPython },
  ],
  Tools: [
    { name: "Git & GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Nginx", icon: SiNginx },
    { name: "Firebase", icon: SiFirebase },
    { name: "Vercel", icon: SiVercel },
    { name: "Kafka", icon: SiApachekafka },
    { name: "VS Code", icon: SiVscodium },
    { name: "Figma", icon: FaFigma },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Admin SaaS Dashboard",
    description:
      "A full-featured admin dashboard with real-time analytics, user management, role-based access control, and dynamic data visualization built for scalable SaaS platforms.",
    image: null,
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Chart.js"],
    live: "#",
    github: "https://github.com/dellibabus",
    featured: true,
    color: "#22C55E",
  },
  {
    id: 2,
    title: "Flavorly – Recipe App",
    description:
      "A beautiful recipe discovery app with search, filters, favorites, and step-by-step cooking guides. Integrated with Spoonacular API for thousands of recipes.",
    image: null,
    tags: ["React", "Spoonacular API", "Zustand", "Tailwind"],
    live: "#",
    github: "https://github.com/dellibabus",
    featured: false,
    color: "#F97316",
  },
  {
    id: 3,
    title: "GNews – News Aggregator",
    description:
      "Real-time news aggregator with category filters, search, bookmarks, and a clean reading experience. Powered by GNews API with offline support.",
    image: null,
    tags: ["React", "GNews API", "Context API", "CSS Modules"],
    live: "#",
    github: "https://github.com/dellibabus",
    featured: false,
    color: "#3B82F6",
  },
  {
    id: 4,
    title: "MERN E-Commerce Platform",
    description:
      "Full-stack e-commerce with product management, cart, Stripe payments, order tracking, and an admin panel with inventory management.",
    image: null,
    tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    live: "#",
    github: "https://github.com/dellibabus",
    featured: false,
    color: "#8B5CF6",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep-diving into your vision, goals, and requirements. Understanding target users, competitors, and defining the project scope for perfect alignment.",
    icon: FaSearch,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Creating wireframes and high-fidelity mockups in Figma. Establishing a design system, color palette, and user flows for a premium experience.",
    icon: FaFigma,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building with clean, scalable MERN stack code. Following best practices, component architecture, and writing maintainable, tested code.",
    icon: FaCode,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Rigorous testing, performance optimization, and deployment to production. Ensuring everything runs flawlessly across all devices.",
    icon: FaRocket,
  },
];