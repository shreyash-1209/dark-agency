import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const TEAM = [
  {
    name: "Jaron Sanem",
    role: "CEO & Co-Founder",
    bio: "10+ years leading digital transformation for Fortune 500 clients. Stanford CS alumni.",
    initials: "JS",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Maslam Mansen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer. Architect behind systems serving 10M+ daily active users.",
    initials: "MM",
    color: "bg-chart-2/20 text-chart-2",
  },
  {
    name: "Alisar Mesohon",
    role: "Head of Design",
    bio: "Award-winning designer with a background in branding, motion, and product design.",
    initials: "AM",
    color: "bg-chart-3/20 text-chart-3",
  },
  {
    name: "Dasia Smith",
    role: "Lead Engineer",
    bio: "Full-stack specialist in React and distributed systems. Open source contributor.",
    initials: "DS",
    color: "bg-chart-5/20 text-chart-5",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-spacing bg-muted/20">
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
            Our People
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A tight-knit crew of designers, engineers, and strategists obsessed
            with craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth text-center card-hover"
              data-ocid={`team-card-${i}`}
            >
              <div className="flex justify-center mb-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback
                    className={`text-xl font-bold font-display ${member.color}`}
                  >
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-0.5">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
