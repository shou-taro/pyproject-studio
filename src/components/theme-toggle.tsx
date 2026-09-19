import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle theme"
      thumbClassName="relative"
      className="cursor-pointer"
    >
      <Sun className="absolute size-2.5 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute size-2.5 scale-0 transition-all dark:scale-100" />
    </Switch>
  );
}
