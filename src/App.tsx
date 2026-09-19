import { AppHeader } from "@/components/layout/app-header";

export function App() {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />
      <main className="flex-1 overflow-auto"></main>
    </div>
  );
}

export default App;
