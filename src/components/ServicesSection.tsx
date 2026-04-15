import { ScrollReveal } from "./ScrollReveal";
import { Code, Palette, Smartphone, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, modern web applications with clean code and latest technologies like React, TypeScript, and Python.",
    color: "bg-sage/30",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive user experiences with attention to detail, accessibility, and modern design principles.",
    color: "bg-warm/25",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Designing responsive interfaces that look and feel amazing across all devices and screen sizes.",
    color: "bg-peach/25",
  },
  {
    icon: Sparkles,
    title: "Creative Solutions",
    description: "Combining AI, creativity, and technology to solve real-world problems with innovative approaches.",
    color: "bg-blush/25",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-warm/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-primary tracking-widest uppercase">What I Do</p>
          <h2 className="mt-2 text-center font-heading text-4xl font-bold text-foreground md:text-5xl">
            My Services
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="group relative rounded-2xl bg-card border border-border/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/20">
                <div className={`mb-4 inline-flex rounded-xl ${s.color} p-3`}>
                  <s.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
