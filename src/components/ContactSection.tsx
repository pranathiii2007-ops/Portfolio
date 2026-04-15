import { ScrollReveal } from "./ScrollReveal";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgonryqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-sage/15 blur-3xl" />
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-primary tracking-widest uppercase">Get In Touch</p>
          <h2 className="mt-2 text-center font-heading text-4xl font-bold text-foreground md:text-5xl">
            Contact Me 💌
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <ScrollReveal className="lg:col-span-2 space-y-6" delay={100}>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-peach/30 p-3"><Mail className="h-5 w-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:pranathi@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">pranathi@example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-sage/30 p-3"><MapPin className="h-5 w-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">Visakhapatnam, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-lavender/30 p-3"><Linkedin className="h-5 w-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-foreground">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/pranathi-balabhadra-395346348" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/pranathi-balabhadra</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-warm/30 p-3"><Github className="h-5 w-5 text-foreground" /></div>
              <div>
                <h4 className="font-semibold text-foreground">GitHub</h4>
                <a href="https://github.com/pranathiii2007-ops" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">github.com/pranathiii2007-ops</a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and just chatting about technology and design! 🌸
            </p>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                maxLength={200}
                value={formData.subject}
                onChange={(e) => setFormData((d) => ({ ...d, subject: e.target.value }))}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent! ✨" : "Send Message"} <Send className="h-4 w-4" />
              </button>
              {status === "sent" && <p className="text-sm text-primary">Thank you! I'll get back to you soon 💌</p>}
              {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
