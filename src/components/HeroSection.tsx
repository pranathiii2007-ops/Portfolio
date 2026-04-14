import heroImg from "@/assets/hero-girl.png";
import { TypewriterText } from "./TypewriterText";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background decorative blobs */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-peach/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-lavender/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {/* Text content - LEFT side */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <p className="mb-3 inline-block rounded-full bg-peach/30 px-4 py-1.5 text-sm font-medium text-peach-foreground">
            ✨ Available for Internships & Projects
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-peach bg-clip-text text-transparent">
              Pranathi
            </span>
          </h1>
          <div className="mt-4 h-10 text-xl text-muted-foreground md:text-2xl">
            I'm a{" "}
            <TypewriterText
              texts={["Web Developer", "UI/UX Designer", "Creative Thinker", "Problem Solver"]}
              className="font-semibold text-primary"
            />
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 mx-auto">
            Passionate computer science student specializing in Artificial Intelligence & Full-Stack Development. 
            I build modern, impactful applications that bridge creativity and technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl">
              View My Work ✦
            </a>
            <a href="#contact" className="rounded-full border-2 border-primary/20 bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:scale-105">
              Let's Talk 💌
            </a>
          </div>
          {/* Stats */}
          <div className="mt-10 flex gap-8 justify-center lg:justify-start">
            {[
              { num: "1+", label: "Projects" },
              { num: "3+", label: "Technologies" },
              { num: "2+", label: "Certifications" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image - RIGHT side */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-peach/40 to-blush/40 blur-2xl scale-110" />
            <img
              src={heroImg}
              alt="Pranathi - Portfolio"
              width={400}
              height={400}
              className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-xl animate-float-slow"
            />
            {/* Floating decorative elements around image */}
            <div className="absolute -top-4 -right-4 animate-bounce-gentle text-2xl">💖</div>
            <div className="absolute -bottom-2 -left-4 animate-sparkle text-xl">✨</div>
            <div className="absolute top-1/2 -right-8 animate-float text-lg" style={{ animationDelay: "1s" }}>⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
}
