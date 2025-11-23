

export function Header() {
  return (
    <header className="bg-muted px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Umoren.ai</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
        </nav>

        <div className="flex items-center gap-4">
        </div>
      </div>
    </header>
  );
}