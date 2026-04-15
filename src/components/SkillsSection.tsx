import { ScrollReveal } from "./ScrollReveal";

const skills = [
  { name: "HTML5", level: 90, color: "bg-peach" },
  { name: "CSS3", level: 85, color: "bg-sage" },
  { name: "JavaScript", level: 72, color: "bg-warm" },
  { name: "Python", level: 70, color: "bg-lavender" },
  { name: "Java", level: 65, color: "bg-blush" },
  { name: "React", level: 60, color: "bg-primary" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-cream/50">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-primary tracking-widest uppercase">My Toolkit</p>
          <h2 className="mt-2 text-center font-heading text-4xl font-bold text-foreground md:text-5xl">
            Skills & Technologies
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-5">
          {skills.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 80}>
              <div className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-foreground">{s.name}</span>
                <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full ${s.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm text-muted-foreground">{s.level}%</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
