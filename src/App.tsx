import { GithubIcon } from "@/components/icons/github-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div className="flex h-screen flex-col">
      <header className="h-content shrink-0 border-b bg-background/95 px-8 py-4 flex items-center justify-between backdrop-blur">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/icon.svg"
            alt=""
            width={24}
            height={24}
            className="size-8"
          />
          <div className="text-lg font-semibold">pyproject.studio</div>
        </a>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Separator orientation="vertical" />
          <a
            href="https://github.com/shou-taro/pyproject-studio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-5" />
          </a>
        </div>
      </header>
      <main className="flex-1 overflow-auto"></main>
    </div>
  );
}

export default App;
