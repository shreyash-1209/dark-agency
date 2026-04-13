import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Code2,
  Palette,
  Search,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Node.js, and modern cloud infrastructure for performance at scale.",
    features: [
      "React & TypeScript",
      "API Integration",
      "Performance Optimization",
    ],
    featured: true,
    size: "large",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design systems that balance aesthetics and usability, turning complex problems into elegant interfaces.",
    features: ["Figma Prototyping", "Design Systems", "User Research"],
    featured: false,
    size: "normal",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that drive organic traffic and improve search rankings across competitive verticals.",
    features: ["Technical SEO", "Content Strategy", "Analytics"],
    featured: false,
    size: "normal",
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    description:
      "Conversion-rate optimization, A/B testing, and analytics pipelines that translate data into revenue growth.",
    features: ["CRO Audits", "A/B Testing", "Funnel Analysis"],
    featured: false,
    size: "normal",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Custom storefronts and commerce platforms engineered for speed, conversions, and seamless checkout experiences.",
    features: ["Headless Commerce", "Payments", "Inventory Systems"],
    featured: false,
    size: "normal",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architecture on AWS and GCP — zero-downtime deployments, auto-scaling, and cost-efficient operations.",
    features: ["AWS / GCP", "CI/CD Pipelines", "Monitoring"],
    featured: false,
    size: "normal",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/10 uppercase tracking-widest text-xs"
          >
            What We Do
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Services Built for <span className="text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            From strategy to execution, we cover every layer of the digital
            stack.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth card-hover overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                data-ocid={`service-card-${i}`}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 gradient-accent-subtle opacity-0 group-hover:opacity-100 transition-smooth rounded-2xl pointer-events-none" />

                <div
                  className={`relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth ${
                    i === 0 ? "w-16 h-16 mb-6" : ""
                  }`}
                >
                  <Icon
                    className={`text-primary ${i === 0 ? "w-8 h-8" : "w-6 h-6"}`}
                  />
                </div>

                <h3
                  className={`font-display font-bold text-foreground mb-2 ${
                    i === 0 ? "text-2xl mb-3" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-muted-foreground leading-relaxed mb-4 ${
                    i === 0 ? "text-base" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
