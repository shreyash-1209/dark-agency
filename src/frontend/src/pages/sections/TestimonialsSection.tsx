import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "CodeCraft completely transformed our digital presence. The attention to detail, communication throughout the project, and final result exceeded every expectation we had.",
    author: "Sarah Leighton",
    company: "CEO, Apex Financial",
    initials: "SL",
  },
  {
    quote:
      "We hired three agencies before CodeCraft. None came close to their level of technical depth and design sophistication. Our new platform drives 3× more leads.",
    author: "James Winterton",
    company: "CTO, DataStream Inc.",
    initials: "JW",
  },
  {
    quote:
      "The team is incredibly talented and a genuine pleasure to work with. They challenged our assumptions and delivered something far better than we imagined.",
    author: "Priya Nair",
    company: "Founder, ContentOS",
    initials: "PN",
  },
  {
    quote:
      "Fast, professional, and meticulous. Our e-commerce site went from embarrassing to industry-leading in under 3 months. Worth every penny.",
    author: "Tom Kessler",
    company: "VP Product, Lumière Co.",
    initials: "TK",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="section-spacing bg-background">
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
            Social Proof
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative p-8 md:p-12 rounded-2xl bg-card border border-border"
            data-ocid="testimonial-card"
          >
            <Quote className="absolute top-8 left-8 w-8 h-8 text-primary/30" />
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 mt-4 italic font-light">
              "{current.quote}"
            </p>
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary/20 text-primary font-bold">
                  {current.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-display font-semibold text-foreground">
                  {current.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {current.company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-smooth ${
                    i === index ? "bg-primary w-8" : "bg-muted w-4"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-smooth"
                aria-label="Previous testimonial"
                data-ocid="testimonial-prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-smooth"
                aria-label="Next testimonial"
                data-ocid="testimonial-next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
