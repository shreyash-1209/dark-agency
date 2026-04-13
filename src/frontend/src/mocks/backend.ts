import type { backendInterface, ContactSubmission, PortfolioProject } from "../backend";

export const mockBackend: backendInterface = {
  getContactSubmissions: async (): Promise<Array<ContactSubmission>> => [
    {
      id: "sub-1",
      name: "Alex Johnson",
      email: "alex@example.com",
      phone: "+1 555 234 5678",
      message: "We'd love to discuss a potential web application project.",
      serviceType: "Web Development",
      timestamp: BigInt(Date.now()),
    },
    {
      id: "sub-2",
      name: "Maria Garcia",
      email: "maria@brandco.com",
      phone: "+1 555 987 6543",
      message: "Interested in brand identity redesign for our startup.",
      serviceType: "Brand Identity",
      timestamp: BigInt(Date.now() - 86400000),
    },
  ],

  getPortfolioProjects: async (): Promise<Array<PortfolioProject>> => [
    {
      id: "proj-1",
      title: "Apex Financial Dashboard",
      category: "Web Application",
      briefDescription: "Real-time analytics dashboard for a fintech company.",
      fullDescription:
        "A comprehensive financial analytics platform featuring live market data, portfolio tracking, and AI-driven insights. Built with React and D3.js for visualizations, processing over 1M daily transactions.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      client: "Apex Capital",
      techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      outcomes: "Reduced reporting time by 60%, increased user engagement by 40%.",
    },
    {
      id: "proj-2",
      title: "Luminary Brand Identity",
      category: "Brand Identity",
      briefDescription: "Complete brand overhaul for a luxury lifestyle brand.",
      fullDescription:
        "Full brand identity system including logo design, typography system, color palette, and brand guidelines. Created a cohesive visual language that elevated the brand's luxury positioning across all touchpoints.",
      imageUrl: "https://images.unsplash.com/photo-1634942536790-54ce98f59ab9?w=800&q=80",
      client: "Luminary Lifestyle",
      techStack: ["Figma", "Adobe Illustrator", "After Effects"],
      outcomes: "Brand recognition improved by 75%, sales conversion up 28%.",
    },
    {
      id: "proj-3",
      title: "Nebula E-Commerce Platform",
      category: "E-Commerce",
      briefDescription: "High-performance online store for a global retailer.",
      fullDescription:
        "End-to-end e-commerce solution with custom checkout flow, inventory management, and personalized recommendation engine. Handles 50,000+ concurrent users during peak periods.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      client: "Nebula Goods",
      techStack: ["Next.js", "Shopify API", "Stripe", "Redis", "AWS"],
      outcomes: "200% increase in online revenue within 6 months of launch.",
    },
    {
      id: "proj-4",
      title: "Horizon Mobile App",
      category: "Mobile App",
      briefDescription: "Cross-platform travel companion app with AR features.",
      fullDescription:
        "A feature-rich travel app combining itinerary management, real-time navigation, augmented reality landmark recognition, and social sharing. Available on iOS and Android with 4.8-star average rating.",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      client: "Horizon Travel",
      techStack: ["React Native", "ARKit", "ARCore", "Firebase", "Google Maps"],
      outcomes: "500K downloads in first 3 months, featured in App Store.",
    },
    {
      id: "proj-5",
      title: "Cipher Security Platform",
      category: "Web Application",
      briefDescription: "Enterprise cybersecurity dashboard and threat intelligence portal.",
      fullDescription:
        "Mission-critical security operations platform with real-time threat detection, vulnerability scanning, and incident response workflows. Serves 200+ enterprise clients globally.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      client: "Cipher Defense",
      techStack: ["Vue.js", "Python", "Elasticsearch", "Kafka", "Docker"],
      outcomes: "Detected and neutralized 3000+ threats in first quarter.",
    },
    {
      id: "proj-6",
      title: "Aura Social Platform",
      category: "Social Media",
      briefDescription: "Niche creative community platform for digital artists.",
      fullDescription:
        "A specialized social platform for digital artists featuring portfolio showcasing, collaboration tools, marketplace integration, and live streaming capabilities for workshops and critiques.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      client: "Aura Creative",
      techStack: ["React", "GraphQL", "WebRTC", "AWS S3", "Stripe"],
      outcomes: "Grew to 150K active creators within 8 months of launch.",
    },
  ],

  getProjectById: async (id: string): Promise<PortfolioProject | null> => {
    const projects: PortfolioProject[] = [
      {
        id: "proj-1",
        title: "Apex Financial Dashboard",
        category: "Web Application",
        briefDescription: "Real-time analytics dashboard for a fintech company.",
        fullDescription:
          "A comprehensive financial analytics platform featuring live market data, portfolio tracking, and AI-driven insights. Built with React and D3.js for visualizations, processing over 1M daily transactions.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        client: "Apex Capital",
        techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
        outcomes: "Reduced reporting time by 60%, increased user engagement by 40%.",
      },
    ];
    return projects.find((p) => p.id === id) ?? null;
  },

  submitContact: async (
    name: string,
    email: string,
    phone: string,
    message: string,
    serviceType: string
  ): Promise<ContactSubmission> => ({
    id: `sub-${Date.now()}`,
    name,
    email,
    phone,
    message,
    serviceType,
    timestamp: BigInt(Date.now()),
  }),
};
