import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-cream/30 py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Made with 💖 by <span className="font-semibold text-foreground">Pranathi</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a href="mailto:pranathi@example.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/pranathi-balabhadra-395346348" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/pranathiii2007-ops" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
