import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    headline: "WEB AGENCY",
    tagline: "Crafting Exceptional Digital Experiences",
    badge: "Full-Stack Development",
    cta: "Explore Our Services",
    ctaTarget: "services",
  },
  {
    headline: "DESIGN & DEVELOP",
    tagline: "Where Vision Meets Execution",
    badge: "UI/UX Design",
    cta: "View Portfolio",
    ctaTarget: "portfolio",
  },
  {
    headline: "SCALE & GROW",
    tagline: "Digital Strategies That Drive Real Results",
    badge: "Growth Engineering",
    cta: "Start a Project",
    ctaTarget: "contact",
  },
];

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "40+", label: "Global Clients" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i === SLIDES.length - 1 ? 0 : i + 1));
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };
  const prev = () => goTo(current === 0 ? SLIDES.length - 1 : current - 1);
  const next = () => goTo(current === SLIDES.length - 1 ? 0 : current + 1);

  const slide = SLIDES[current];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-network.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Slide content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                className="mb-6 bg-primary/20 text-primary border-primary/30 text-xs uppercase tracking-widest px-4 py-1.5"
                variant="outline"
              >
                {slide.badge}
              </Badge>
              <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight leading-none mb-6">
                {slide.headline}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
                {slide.tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 transition-smooth font-semibold px-8 text-base"
                  onClick={() => scrollTo(slide.ctaTarget)}
                  data-ocid="hero-primary-cta"
                >
                  {slide.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/40 transition-smooth text-base"
                  onClick={() => scrollTo("portfolio")}
                  data-ocid="hero-secondary-cta"
                >
                  View Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Controls + Dots row */}
        <div className="relative z-10 flex items-center justify-center gap-4 pb-8">
          <button
            type="button"
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-smooth"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((s) => (
              <button
                key={s.headline}
                type="button"
                onClick={() => goTo(SLIDES.indexOf(s))}
                className={`h-1.5 rounded-full transition-smooth ${
                  SLIDES.indexOf(s) === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/40 w-3"
                }`}
                aria-label={`Go to slide: ${s.headline}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-smooth"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll hint */}
        <motion.button
          type="button"
          className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
          onClick={() => scrollTo("services")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          data-ocid="scroll-hint"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-card/80 backdrop-blur border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-black text-3xl text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
