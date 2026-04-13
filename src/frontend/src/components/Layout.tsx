import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { threshold: 0.3 },
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMenuOpen(false);
      if (isHome) {
        scrollToSection(href);
      } else {
        router.navigate({ to: "/" });
        setTimeout(() => scrollToSection(href), 300);
      }
    },
    [isHome, router],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        data-ocid="main-nav"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-smooth",
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="logo"
          >
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Zap
                className="w-4 h-4 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Code<span className="text-primary">Craft</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-smooth",
                  activeSection === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                data-ocid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:opacity-90 transition-smooth font-semibold"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav-cta"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="mobile-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-smooth"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 bg-primary text-primary-foreground"
              onClick={() => handleNavClick("#contact")}
            >
              Start a Project
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
