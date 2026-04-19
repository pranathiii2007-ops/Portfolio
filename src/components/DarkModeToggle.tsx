import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      className="relative h-9 w-9 rounded-full bg-secondary flex items-center justify-center transition-all hover:scale-110 hover:bg-accent"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <Sun className="h-4 w-4 text-foreground transition-transform rotate-0 scale-100" />
      ) : (
        <Moon className="h-4 w-4 text-foreground transition-transform rotate-0 scale-100" />
      )}
    </button>
  );
}
