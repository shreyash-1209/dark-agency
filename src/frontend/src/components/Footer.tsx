import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const QUICK_LINKS = [
  "Services",
  "Portfolio",
  "Team",
  "Testimonials",
  "Contact",
];
const SOCIAL = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Zap
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Code<span className="text-primary">Craft</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We craft exceptional digital experiences that transform brands and
              drive growth in the modern web landscape.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-4">
              Social Media
            </h4>
            <ul className="space-y-2">
              {SOCIAL.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} CodeCraft, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
