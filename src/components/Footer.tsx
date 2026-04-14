export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-cream/30 py-8 px-4 text-center">
      <p className="text-sm text-muted-foreground">
        Made with 💖 by <span className="font-semibold text-foreground">Pranathi</span> © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
