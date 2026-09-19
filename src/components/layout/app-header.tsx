import { GithubIcon } from "@/components/icons/github-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

/**
 * The application's top-level header, fixed at a constant height by the
 * `flex h-screen flex-col` layout in {@link App}.
 *
 * Renders the app's brand mark on the left, and the utility controls
 * (theme toggle, GitHub link) on the right.
 */
export function AppHeader() {
  return (
    <header className="h-content shrink-0 border-b bg-background/95 px-6 py-3 flex items-center justify-between backdrop-blur">
      {/* Brand mark. Links to "/" as a conventional way home, even though
          there is currently only one screen. */}
      <a href="/" className="flex items-center gap-2">
        <img src="/icon.svg" alt="" width={24} height={24} className="size-8" />
        <div className="text-lg font-semibold">pyproject.studio</div>
      </a>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Separator orientation="vertical" />
        {/* `noopener noreferrer` stops the GitHub tab from being able to
            reach back into this tab via `window.opener`. */}
        <a
          href="https://github.com/shou-taro/pyproject-studio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="text-muted-foreground hover:text-foreground transition-colors m-2"
        >
          <GithubIcon className="size-5" />
        </a>
      </div>
    </header>
  );
}
