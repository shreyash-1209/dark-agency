import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A standard website takes 4–8 weeks. Custom web applications range from 2–6 months. We'll provide a detailed timeline during the discovery phase.",
  },
  {
    q: "What information do you need to get started?",
    a: "We start with a brief discovery call to understand your goals, audience, and existing assets. From there we create a project proposal with scope, timeline, and investment.",
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes. We offer monthly retainer packages covering updates, performance monitoring, security patches, and feature development. Most clients retain us post-launch.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core stack is React, TypeScript, Node.js, and modern cloud infrastructure (AWS/GCP). We adapt our tooling to your requirements, not the other way around.",
  },
  {
    q: "How do you handle communication during a project?",
    a: "We set up a shared Slack channel for async updates, hold weekly video syncs, and use Notion for project documentation. You'll always know exactly where things stand.",
  },
  {
    q: "Can you work with our existing design or brand guidelines?",
    a: "Absolutely. We frequently implement designs from clients' in-house teams or partner design agencies. If needed, we can also extend or refine existing brand systems.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-spacing bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/10 uppercase tracking-widest text-xs"
          >
            FAQ
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Quick <span className="text-primary">Answers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq-accordion"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40"
                data-ocid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-display font-semibold text-foreground hover:text-primary hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
