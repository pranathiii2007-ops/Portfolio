import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PathFinder",
    subtitle: "AI Career Guidance Platform",
    description: "An AI-powered platform providing personalized career guidance and recommendations.",
    tags: ["React", "AI", "TypeScript"],
    color: "bg-sage/40",
    live: "https://ai-pathfinder-alpha.vercel.app/",
    github: "https://github.com/pranathiii2007-ops",
  },
  {
    title: "Portfolio",
    subtitle: "Personal Website",
    description: "A warm, pastel-themed portfolio showcasing my work, skills and passion for design.",
    tags: ["React", "TailwindCSS", "TypeScript"],
    color: "bg-lavender/40",
    live: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute top-20 left-10 h-48 w-48 rounded-full bg-lavender/15 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-primary tracking-widest uppercase">What I've Built</p>
          <h2 className="mt-2 text-center font-heading text-4xl font-bold text-foreground md:text-5xl">
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 150}>
              <div className="group overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`h-48 ${p.color} flex items-center justify-center`}>
                  <span className="text-6xl font-bold text-foreground/10 font-heading">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-primary">{p.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a href={p.live} className="flex items-center gap-1.5 text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                    <a href={p.github} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
