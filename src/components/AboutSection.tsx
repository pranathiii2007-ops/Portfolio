import aboutImg from "@/assets/about-girl.png";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-sage/20 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-primary tracking-widest uppercase">Get to know me</p>
          <h2 className="mt-2 text-center font-heading text-4xl font-bold text-foreground md:text-5xl">
            About Me
          </h2>
        </ScrollReveal>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Animated image */}
          <ScrollReveal className="flex-shrink-0" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-warm/25 to-sage/25 blur-xl scale-105" />
              <img
                src={aboutImg}
                alt="Pranathi working"
                loading="lazy"
                width={400}
                height={400}
                className="relative z-10 w-64 md:w-72 lg:w-80 rounded-3xl animate-float-slow"
              />
              <div className="absolute -top-3 right-0 animate-sparkle text-xl">🌻</div>
              <div className="absolute -bottom-3 left-4 animate-bounce-gentle text-lg">🎨</div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal className="flex-1" delay={400}>
            <h3 className="font-heading text-2xl font-semibold text-foreground">Who Am I? 👋</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I'm <strong className="text-foreground">Pranathi</strong>, a Computer Science student at{" "}
              <strong className="text-foreground">Vignan Institute of Information Technology</strong>, 
              specializing in Artificial Intelligence. I'm driven by a passion for building meaningful, 
              user-centric applications.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I love combining creativity with technical precision — whether it's crafting elegant UIs, 
              writing clean code in Python or Java, or solving algorithmic challenges.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Visakhapatnam, India" },
                { icon: "🎓", label: "B.Tech – CSE (AI)" },
                { icon: "💻", label: "AI & Web Development" },
                { icon: "🌐", label: "English, Telugu" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm border border-border/50">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
