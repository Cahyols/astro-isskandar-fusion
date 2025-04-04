
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        aria-label="Toggle theme"
        className="p-2 h-9 w-9 rounded-md"
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Toggle>
    </div>
  );
}
